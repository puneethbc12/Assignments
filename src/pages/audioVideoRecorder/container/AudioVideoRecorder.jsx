import React, { lazy, useState } from 'react'
import "../AudioVideoRecorder.css"


const AudioRecorder = lazy(() => import('../components/AudioRecorder'))
const VideoRecorder = lazy(() => import('../components/VideoRecorder'))


const AudioVideoRecorder = () => {
    const [recordSelection, setRecordSelection] = useState('')


    return (
        <div className='audio-video-recorder'>
            <div className="audio-video-recorder-content">
                <div className="btn-container">
                    <button onClick={() => setRecordSelection('1')} className='button'>Record Audio</button>
                    <button onClick={() => setRecordSelection('2')} className='button'>Record Video</button>
                </div>
                <div className='recording-container'>
                    {recordSelection === '1' && <AudioRecorder />}
                    {recordSelection === '2' && <VideoRecorder />}
                </div>
            </div>
        </div>
    )
}

export default AudioVideoRecorder
