import React, { useRef, useState } from 'react';

const VideoRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [videoURL, setVideoURL] = useState('');
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const recordedChunks = useRef([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            videoRef.current.srcObject = stream;

            mediaRecorderRef.current = new MediaRecorder(stream);
            recordedChunks.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recordedChunks.current.push(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(recordedChunks.current, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                setVideoURL(url);

                // Stop the camera stream tracks
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error accessing media devices.', error);
        }
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
    };

    const resetRecording = () => {
        setVideoURL('')
    }

    const downloadRecording = () => {

    }

    return (
        <div>
            <h2 className='recorder-label'>Video Recorder</h2>

            <div className='btn-container'>
                {!isRecording ? <button onClick={startRecording} className='button'>Start Recording</button>
                    : <button onClick={stopRecording} className='button'>Stop Recording</button>
                }
                {videoURL && <a className='button' href={videoURL} download="My Video Recording.mp4">Download</a>}
                {videoURL && <button onClick={resetRecording} className='button'>Reset</button>}
            </div>
            <div className='preview-container'>
                {videoURL ?
                    <>
                        <h4 className='recorder-label'>Recorded Video:</h4>
                        <video controls src={videoURL} style={{ width: '400px', height: 'auto' }} className='recording-content'></video>
                    </>
                    :
                    <video ref={videoRef} autoPlay muted style={{ width: '400px', height: 'auto' }} className='recording-content'></video>
                }
            </div>
        </div>
    );
};

export default VideoRecorder;
