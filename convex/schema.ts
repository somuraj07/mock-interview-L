import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'
import { start } from 'repl'

export default defineSchema({
    users :defineTable({
        name:v.string(),
        email:v.string(),
        image:v.string(),
        role:v.union(v.literal('candidate'),v.literal('interviewer')),
        clerkId:v.string(),
}).index("clerkId",["clerkId"]),
interviews:defineTable({
    title:v.string(),
    description:v.optional(v.string()),
    startTime:v.number(),
    endtime:v.optional(v.number()),
    status :v.string(),
    streamCallId: v.string(),
    candidateId:v.string(),
    interviewerId:v.array(v.string()),
    })
    .index("candidateId",["candidateId"])
    .index("streamCallId",["streamCallId"]),

 comments :defineTable({
    content:v.string(),
    rating:v.number(),
    interviewerId:v.string(),
   interviewId:v.id("interviews"),
 }).index("interviewId",["interviewId"]),




})


