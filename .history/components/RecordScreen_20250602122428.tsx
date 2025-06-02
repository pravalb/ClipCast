'use client';

import React, {useState, useRef} from 'react'
import Image from 'next/image'
import { ICONS } from '@/constants'
import { useRouter } from 'next/navigation';
import { useScreenRecording } from '@/lib/hooks/useScreenRecording';

const RecordScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const router = useRouter();

  const { isRecording, recordedBlob, recordedVideoUrl, recordingDuration, startRecording, stopRecording, resetRecording } = useScreenRecording();

  const closeModal = () => {
    resetRecording();
    setIsOpen(false);
  };

  const handleStart = async () => {
    await startRecording();
  };

  const recordAgain = async () => {
    resetRecording();
    await startRecording();

    if(recordedVideoUrl && videoRef.current) {
        videoRef.current.src = recordedVideoUrl
    }
  };

  return (
    <div className='record'>
        <button className='primary-btn' onClick={( ) => setIsOpen(true)}>
            <Image src={ICONS.record} alt='record' width = {16} height = {16} />
            <span>Record a video</span>
        </button>

        {isOpen && (
            <section className='dialog'>
                <div className='overlay-record' onClick={closeModal}>
                    <div className='dialog-content'>
                        <figure>
                            <h3>Screen Recording</h3>
                            <button onClick={closeModal}>
                                <Image src={ICONS.close} alt='close' height = {20} width={20}/>
                            </button>
                        </figure>
                        <section>
                            {isRecording ? (
                            <article>
                                <div />
                                <span>Recording in progress...</span>
                            </article>
                        ) : recordedVideoUrl ? (
                            <video ref={videoRef} src={recordedVideoUrl} controls />
                        ) : (
                        <p>Click record to start capturing your screen</p>
                        )}
                        </section>
                    </div>
                </div>
            </section>
        )}
    </div>
  )
}

export default RecordScreen


