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
            <FileInput />
        </form>
        
    </div>
  )
}

export default page