
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";



export const syncUser = mutation({
    args: {
        clerkId: v.string(),
        email: v.string(),
        name: v.string(),
        image: v.optional(v.string()),
    },
    handler:async(ctx,args) => {
        const exiistingUser = await ctx.db.query("users")
        .filter(q => q.eq(q.field("clerkId"),args.clerkId)).first();
        if(exiistingUser) return;

        return await ctx.db.insert("users",{
            ...args,
            image: args.image ?? "",
            role: "candidate",
            });
        }

       
        }
    );


    export const getUsers = query({
        handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) throw new Error("Unauthorized");
        const users = await ctx.db.query("users").collect();
        return users;
        }
    });
    
    export const getUserByClerkId = query({
        args: {
        clerkId: v.string(),
        },
        handler: async (ctx, args) => {
        const user = ctx.db.query("users")
            .withIndex("clerkId", (q) => q.eq("clerkId", args.clerkId))
        .first();
        
        return user;
        
        }

    });