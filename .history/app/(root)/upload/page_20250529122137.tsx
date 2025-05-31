'use client'

import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import { desc } from 'drizzle-orm';
import React from 'react'
import { useState } from 'react';

const page = () => {
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

    const video = {};

    const thumbnail = {};

  return (
    <div className='wrapper-md upload-page'>
        <h1>Upload a video</h1>

        {error && <div className='error-field'>{error}</div>}

        <form className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5'>
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
        </form>
        
    </div>
  )
}

export default page