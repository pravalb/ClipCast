import { set } from "better-auth";
import { useState, useRef, ChangeEvent } from "react";

export const useFileInput = (maxSize: number) => {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.[0]) {

            const selectedFile = e.target.files[0];
            
            if (selectedFile.size > maxSize) return;

            if(previewUrl) URL.revokeObjectURL(previewUrl);

            setFile(selectedFile);

            const objectUrl = URL.createObjectURL(selectedFile);

            setPreviewUrl(objectUrl);

            if(selectedFile.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.preload = 'metadata';
                video.onloadedmetadata = () => {
                    if(isFinite(video.duration) && video.duration > 0) {
                        setDuration(Math.round(video.duration));
                    } else {
                        setDuration(null);
                    }

                    URL.revokeObjectURL(objectUrl);
                };
                
                video.src = objectUrl;
            }

        }
    }

    const resetFile = () => {
        if(previewUrl) URL.revokeObjectURL(previewUrl);
        setFile(null);  
        setPreviewUrl(null);
        setDuration(null);
        if (inputRef.current) inputRef.current.value = "";
    };

}