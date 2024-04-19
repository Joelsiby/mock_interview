import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiSquare, FiRefreshCw, FiPause } from 'react-icons/fi';
import RecordRTC from 'recordrtc';

const VideoRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isPreview) {
      async function getMedia() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          videoRef.current.srcObject = stream;
        } catch (error) {
          console.error('Error accessing media devices:', error);
        }
      }
      getMedia();
    }
  }, [isPreview]);

  const startRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
    setIsPreview(false);
    const stream = videoRef.current.srcObject;
    const recorder = new RecordRTC(stream, { type: 'video' });
    recorder.startRecording();
    setRecorder(recorder);

    const id = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stopRecording(() => {
        const blob = recorder.getBlob();
        videoRef.current.src = URL.createObjectURL(blob);
        videoRef.current.load();
        videoRef.current.srcObject = null;

        setIsRecording(false);
        setIsPaused(false);
        setIsPreview(true);
        clearInterval(intervalId);
        setTimer(0);
        setRecorder(null);
      });
    }
  };

  const pauseRecording = () => {
    if (recorder && !isPaused) {
      recorder.pauseRecording();
      setIsPaused(true);
      clearInterval(intervalId);
    } else if (recorder && isPaused) {
      recorder.resumeRecording();
      setIsPaused(false);
      const id = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const resetRecording = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setTimer(0);
    setIsRecording(false);
    setIsPaused(false);
    setIsPreview(false);
    setRecorder(null);
    videoRef.current.src = null;
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      videoRef.current.srcObject = stream;
    });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100	">
      <div className="bg-blue-300 p-4 rounded-lg shadow-lg">
        <video ref={videoRef} className="w-full rounded-lg" autoPlay muted controls={isPreview}></video>
        <div className="card bg-white p-4 rounded-lg shadow-xl mt-4">
          <div className="flex justify-around items-center">
            {!isRecording && !isPreview ? (
              <button onClick={startRecording} className="flex items-center px-4 py-2 bg-green-500 text-white rounded shadow cursor-pointer">
                <FiPlay className="mr-2" /> Start
              </button>
            ) : (
              isRecording && <button onClick={stopRecording} className="flex items-center px-4 py-2 bg-red-500 text-white rounded shadow cursor-pointer">
                <FiSquare className="mr-2" /> Stop
              </button>
            )}
            {isRecording && (
              <button onClick={pauseRecording} className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded shadow cursor-pointer">
                <FiPause className="mr-2" /> {isPaused ? 'Resume' : 'Pause'}
              </button>
            )}
            <button onClick={resetRecording} className="flex items-center px-4 py-2 bg-gray-500 text-white rounded shadow cursor-pointer">
              <FiRefreshCw className="mr-2" /> Reset
            </button>
            <p className="text-center">{formatTime(timer)}</p>
            {isPreview && (
              <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded shadow cursor-pointer">
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRecorder;
