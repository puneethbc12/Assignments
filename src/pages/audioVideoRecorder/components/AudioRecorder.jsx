import React, { useRef, useState } from 'react'

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState('');
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunks.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunks.current.push(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (err) {
            console.error('Microphone access denied or error:', err);
        }
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
    };

    const resetRecording = () => {
        setAudioURL('')
    }

    return (
        <div>
            <h2 className='recorder-label'>Audio Recorder</h2>
            <div className='btn-container'>
                {!isRecording ? <button onClick={startRecording} className='button'>Start Recording</button>
                    : <button onClick={stopRecording} className='button'>Stop Recording</button>
                }
                {audioURL && <a className='button' href={audioURL} download="My Audio Recording.mp3">Download</a>}
                {audioURL && <button onClick={resetRecording} className='button'>Reset</button>}
            </div>

            {audioURL &&
                <div className='preview-container'>
                    <h4 className='recorder-label'>Preview:</h4>
                    <audio controls src={audioURL}></audio>
                </div>
            }
        </div>
    );
};

export default AudioRecorder;
