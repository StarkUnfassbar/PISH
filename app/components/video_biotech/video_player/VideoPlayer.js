import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './video_player.css';



export default function VideoPlayer({ videoPlayerShow }) {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const videoJsOptions = {
        controls: false,
        autoplay: false,
        responsive: true,
        fluid: false,
        sources: [{
            src: 'https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video_1.mp4',
            type: 'video/mp4'
        }]
    };

    useEffect(() => {
        // Инициализация плеера
        const initPlayer = () => {
            if (videoRef.current && !playerRef.current) {
				console.log(videoRef.current)
                const player = videojs(videoRef.current, videoJsOptions);
                
                playerRef.current = player;
                
                player.on('play', () => setIsPlaying(true));
                player.on('pause', () => setIsPlaying(false));
                player.on('volumechange', () => setVolume(player.volume()));
                player.on('timeupdate', () => setCurrentTime(player.currentTime()));
                player.on('loadedmetadata', () => setDuration(player.duration()));

				console.log(playerRef.current && !playerRef.current.isDisposed())
            }
        };

        initPlayer();

        return () => {
            if (playerRef.current && !playerRef.current.isDisposed()) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pause();
            } else {
                playerRef.current.play();
            }
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        if (playerRef.current) {
            playerRef.current.volume(newVolume);
        }
        setVolume(newVolume);
    };

    const handleTimeUpdate = (e) => {
        const newTime = parseFloat(e.target.value);
        if (playerRef.current) {
            playerRef.current.currentTime(newTime);
        }
        setCurrentTime(newTime);
    };

    const toggleFullscreen = () => {
        if (playerRef.current) {
            if (playerRef.current.isFullscreen()) {
                playerRef.current.exitFullscreen();
            } else {
                playerRef.current.requestFullscreen();
            }
        }
    };

    return (
        <div className={`video_container ${videoPlayerShow ? "" : "_hidden"}`}>
            <div data-vjs-player>
                <video
                    ref={videoRef}
                    className="video-js vjs-default-skin"
                />
            </div>
            
            <div className="block_controls">
                <div className="container">
                    <button onClick={togglePlay} className="control_button">
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 36" fill="none">
                                <path d="M33.5 3V33C33.4991 33.7954 33.1827 34.5579 32.6203 35.1203C32.0579 35.6827 31.2954 35.9991 30.5 36H23.75C22.9546 35.9991 22.1921 35.6827 21.6297 35.1203C21.0673 34.5579 20.7509 33.7954 20.75 33V3C20.7509 2.20463 21.0673 1.4421 21.6297 0.879684C22.1921 0.317272 22.9546 0.000909634 23.75 0H30.5C31.2954 0.000909634 32.0579 0.317272 32.6203 0.879684C33.1827 1.4421 33.4991 2.20463 33.5 3V3ZM10.25 0H3.5C2.70463 0.000909634 1.9421 0.317272 1.37968 0.879684C0.817272 1.4421 0.50091 2.20463 0.5 3V33C0.50091 33.7954 0.817272 34.5579 1.37968 35.1203C1.9421 35.6827 2.70463 35.9991 3.5 36H10.25C11.0454 35.9991 11.8079 35.6827 12.3703 35.1203C12.9327 34.5579 13.2491 33.7954 13.25 33V3C13.2491 2.20463 12.9327 1.4421 12.3703 0.879684C11.8079 0.317272 11.0454 0.000909634 10.25 0V0Z" fill="white"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 25" fill="none">
                                <path d="M19.3758 10.9531L3.0413 0.98613C2.76617 0.818147 2.45117 0.726388 2.12873 0.720295C1.80629 0.714202 1.48804 0.793995 1.20674 0.951463C0.925433 1.10893 0.691228 1.33839 0.528221 1.61623C0.365215 1.89406 0.279293 2.21025 0.279297 2.53224V22.468C0.279559 22.7899 0.365646 23.1059 0.528715 23.3836C0.691783 23.6612 0.925954 23.8906 1.20717 24.048C1.48838 24.2054 1.8065 24.2852 2.12884 24.2793C2.45118 24.2733 2.76612 24.1818 3.0413 24.0141L19.3758 14.0471C19.6411 13.8851 19.8604 13.6578 20.0125 13.3869C20.1646 13.116 20.2445 12.8107 20.2445 12.5001C20.2445 12.1896 20.1646 11.8842 20.0125 11.6133C19.8604 11.3425 19.6411 11.1151 19.3758 10.9531Z" fill="white"/>
                            </svg>
                        )}
                    </button>
                    
                    <div className="volume_control">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                <path d="M13.6802 4.81799C14.098 5.23586 14.4295 5.73193 14.6557 6.2779C14.8818 6.82386 14.9982 7.40903 14.9982 7.99997C14.9982 8.59092 14.8818 9.17608 14.6557 9.72205C14.4295 10.268 14.098 10.7641 13.6802 11.182" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 10.5H2C1.86739 10.5 1.74021 10.4473 1.64645 10.3536C1.55268 10.2598 1.5 10.1326 1.5 10V6C1.5 5.86739 1.55268 5.74021 1.64645 5.64645C1.74021 5.55268 1.86739 5.5 2 5.5H5L9.5 2V14L5 10.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 5.5V10.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.9121 6.58582C12.0978 6.77153 12.2451 6.99201 12.3457 7.23466C12.4462 7.47731 12.4979 7.73739 12.4979 8.00003C12.4979 8.26267 12.4462 8.52274 12.3457 8.7654C12.2451 9.00805 12.0978 9.22853 11.9121 9.41424" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>

                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="volume_slider"
                        />
                    </div>
                    
                    <div className="progress_container">
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            step="0.1"
                            value={currentTime}
                            onChange={handleTimeUpdate}
                            className="progress_bar"
                        />
                        <div 
                            className="progress_filled"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                    </div>
                    
                    <button onClick={toggleFullscreen} className="button_fullscreen">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40" fill="none">
                            <path d="M25.9688 7.5H33.4805V15" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M24.7168 16.25L33.4805 7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.9531 32.5H8.44141V25" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.2051 23.75L8.44141 32.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}