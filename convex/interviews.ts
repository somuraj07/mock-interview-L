import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAllInterviews = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) throw new Error("Unauthorized");
        const interviews = await ctx.db.query("interviews").collect();
        return interviews;
    }
});

export const getMyInterviews = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) throw new Error("Unauthorized");
        const interviews = await ctx.db.query("interviews")
        .withIndex("candidateId",(q) => q.eq("candidateId",identity.subject)).collect();
        return interviews;
    }
});

export const getInterviewByStreamCallId = query({
    args:{
        streamCallId:v.string(),
    },
    handler: async (ctx, args) => {
        const interview = await ctx.db.query("interviews")
        .withIndex("streamCallId",(q) => q.eq("streamCallId",args.streamCallId)).first();
        return interview;
    }
});

export const createInterview = mutation({

    args:{
        title:v.string(),
        description:v.optional(v.string()),
        startTime:v.number(),
        endTime:v.optional(v.number()),
        status:v.string(),
        streamCallId:v.string(),
        candidateId:v.string(),
        interviewerId:v.array(v.string()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) throw new Error("Unauthorized");
        return await ctx.db.insert("interviews",{
            ...args,
        });
    }
});

export const updateInterview = mutation({
    args:{
        id:v.id("interviews"),
        status:v.string(),
    },
    handler: async (ctx, args) => {
       return await ctx.db.patch(args.id,{
              status:args.status,
              ...(args.status === "completed" ? {endTime:Date.now()} : {}),
         });
    }
});
