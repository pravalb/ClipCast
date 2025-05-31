'use client'

import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from '@/constants';
import { desc } from 'drizzle-orm';
import React, { use } from 'react'
import { useState, useEffect } from 'react';
import { useFileInput } from '@/lib/hooks/useFileInput';
import { set } from 'better-auth';
import { getVideoUploadUrl, getThumbnailUploadUrl, saveVideoDetails } from '@/lib/actions/video';

const uploadFileToBunny = (file:File, uploadUrl:string, accessKey:string): Promise<void> => {
    return fetch(uploadUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': file.type,
            'AccessKey': accessKey,
        },
        body: file,
    }).then(response => {
        if (!response.ok) 
            throw new Error('Upload failed');
        
    })
}

const page = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [videoDuration, setVideoDuration] = useState<number | null>(null);

    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        visibility: 'public',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value}))
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if(!video.file || !thumbnail.file) {
                setError('Please upload both video and thumbnail files.');
                return;
            }
            if(!formData.title || !formData.description) {
                setError('Please fill in all fields.');
                return;
            }

            // 0 get Upload the video to Bunny
            const {
                videoId,
                uploadUrl: videoUploadUrl,
                accessKey: videoAccessKey
            } = await getVideoUploadUrl();

            if(!videoUploadUrl || !videoAccessKey) throw new Error('Failed to get video upload URL');

            // 1. Upload the video to Bunny
            await uploadFileToBunny(video.file, videoUploadUrl, videoAccessKey);

            // Upload the thumbnail to DB
            const {
                uploadUrl: thumbnailUploadUrl,
                accessKey: thumbnailAccessKey,
                cdnUrl: thumbnailCdnUrl
            }= await getThumbnailUploadUrl(videoId);

            if(!thumbnailUploadUrl || !thumbnailAccessKey || !thumbnailCdnUrl) {
                throw new Error('Failed to get thumbnail upload credentials');
            }
            
            // Attach the thumbnail
            await uploadFileToBunny(thumbnail.file, thumbnailUploadUrl, thumbnailAccessKey);

            // Create a new db entry for the video details(urls, data, etc.)
            await saveVideoDetails({
                videoId,
                thumbnailUrl: thumbnailCdnUrl,
                ...formData,
                duration: videoDuration
            })


        }catch(error){
            console.log('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    const video = useFileInput(MAX_VIDEO_SIZE);

    const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

     useEffect(() => {
        if(video.duration != null || 0) {
            setVideoDuration(video.duration);
        }
    }, [video.duration]);

  return (
    <div className='wrapper-md upload-page'>
        <h1>Upload a video</h1>

        {error && <div className='error-field'>{error}</div>}

        <form className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5' onSubmit={handleSubmit}>
            <FormField 
                id = 'title'
                label = "Title"
                placeholder = "Enter a clear and concise title for your video"
                value = {formData.title}
                onChange = {handleInputChange}
            />

            <FormField 
                id = 'description'
                label = 'Description'
                placeholder = "Describe your video in detail"
                value = {formData.description}
                as = 'textarea'
                onChange = {handleInputChange}
            />

            <FileInput 
                id = 'video'
                label = 'Video'
                accept = 'video/*'
                file = {video.file}
                previewUrl = {video.previewUrl}
                inputRef={video.inputRef}
                onChange = {video.handleFileChange}
                onReset ={video.resetFile}
                type = 'video'
            />

            <FileInput 
                id = 'thumbnail'
                label = 'Thumbnail'
                accept = 'image/*'
                file = {thumbnail.file}
                previewUrl = {thumbnail.previewUrl}
                inputRef={thumbnail.inputRef}
                onChange = {thumbnail.handleFileChange}
                onReset ={thumbnail.resetFile}
                type = 'image'
            />

            <FormField 
                id = 'visibility'
                label = 'Visibility'
                placeholder = "Select the visibility of your video"
                value = {formData.visibility}
                as = 'select'
                options = {[
                    { value: 'public', label: 'Public' },
                    { value: 'private', label: 'Private' }
                ]}
                onChange = {handleInputChange}
            />

            <button type = "submit" disabled={isSubmitting} className="submit-button">
                {isSubmitting ? 'Uploading...' : 'Upload Video'}
            </button>
        </form>
        
    </div>
  )
}

export default page