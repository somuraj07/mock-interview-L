import { httpRouter } from "convex/server";
import { request } from "http";
import { httpAction } from "./_generated/server"
import { Webhook } from "svix"; 
import { WebhookEvent } from "@clerk/nextjs/server"

import { api } from "./_generated/api";
const http = httpRouter();

http.route({
    path: "/clerk-webhook",
    method: "POST",
    handler: httpAction(async (ctx , request) => {
    const webhookSecert = process.env.CLERK_WEBHOOK_SECRET;
    if(!webhookSecert){
        throw new Error("Missing webhook secret");
    }
    const svix_id = request.headers.get("svix-id");
    const svix_signature = request.headers.get("svix-signature");
    const svix_timestamp = request.headers.get("svix-timestamp");


    if(!svix_id || !svix_signature || !svix_timestamp){
        return new Response("Missing headers", {status:400});

    }
    const payload = await request.json();
    const body = JSON.stringify(payload);
   const wh = new Webhook(webhookSecert);
   let evt : WebhookEvent;
   try{
    evt = wh.verify(body,{
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature
    }) as WebhookEvent;
   } catch(e){
       return new Response("Invalid signature", {status:401});
   }

   const eventType = evt.type;
    if(eventType === "user.created"){
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;
    const email = email_addresses[0].email_address;
    const name = `${first_name || ""} ${last_name || ""}`.trim();
    
    try {
        await ctx.runMutation(api.users.syncUser, {
        clerkId: id,
        email,
        name,
        image: image_url
    });
    } catch (error) {
        console.error("Failed to sync user", error);
        return new Response("Failed to sync user", {status:500});
    }
    }
    return new Response("OK", {status:200});
    }
)
});
