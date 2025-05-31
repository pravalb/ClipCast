'use server';

import { withErrorHandling } from "@/lib/utils";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

//Helper Functions
const getSessionUserId = async (): Promise<string> => {
    const session = await auth.api.getSession({headers: await headers()});

    if(!session) throw new Error("Unauthenticated");

    return session.user.id;
    
}

//Sever Actions

export const getVideoUploadUrl = withErrorHandling (async () => {
    await getSessionUserId();

});