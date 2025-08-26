"use client"

import { useEffect, useRef, useState } from 'react';

const VideoPlayer = ({ 
  src, 
  onReady, 
  className = '',
  preload = 'auto',
  autoplay = true,
  isActive = false
}) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      onReady && onReady(video);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    
    // Устанавливаем правильный атрибут preload
    video.preload = preload;
    
    if (isActive && autoplay) {
      video.play().catch(console.error);
    } else {
      video.pause();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [isActive, autoplay, onReady, preload]);

  return (
    <div className={`video-container ${className}`}>
      <video
        ref={videoRef}
        src={src}
        preload={preload}
        muted
        playsInline
        loop
        style={{
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  );
};

export default VideoPlayer;