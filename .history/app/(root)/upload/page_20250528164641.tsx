'use client'

import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import React from 'react'
import { useState } from 'react';

const page = () => {
    const [error, setError] = useState<string | null>(null);

  return (
    <div className='wrapper-md upload-page'>
        <h1>Upload a video</h1>
        <FormField />
        <FileInput />
    </div>
  )
}

export default page