'use server';

import { apiFetch, getEnv, withErrorHandling } from "@/lib/utils";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { BUNNY } from "@/constants";

const VIDEO_STREAM_BASE_URL = BUNNY.STREAM_BASE_URL;
const THUMBNAIL_STORAGE_BASE_URL = BUNNY.STORAGE_BASE_URL;
const THUMBNAIL_CDN_URL = BUNNY.CDN_URL;
const BUNNY_LIBRARY_ID = getEnv("BUNNY_LIBRARY_ID");
const ACCESS_KEYS = {
  streamAccessKey: getEnv("BUNNY_STREAM_ACCESS_KEY"),
  storageAccessKey: getEnv("BUNNY_STORAGE_ACCESS_KEY"),
};

//Helper Functions
const getSessionUserId = async (): Promise<string> => {
    const session = await auth.api.getSession({headers: await headers()});

    if(!session) throw new Error("Unauthenticated");

    return session.user.id;
    
}

//Sever Actions

export const getVideoUploadUrl = withErrorHandling (async () => {
    await getSessionUserId();

    const videoResponse = await apiFetch<BunnyVideoResponse>(
    `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos`,
    {
      method: "POST",
      bunnyType: "stream",
      body: { title: "Temp Title", collectionId: "" },
    }
  );
   const uploadUrl = `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoResponse.guid}`;
   return {
    videoId: videoResponse.guid,
    uploadUrl,
    accessKey: ACCESS_KEYS.streamAccessKey,
  };  
});
