"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import './medicine.css';

const videoList = [
	'/video/medicine/part_1.mp4',
	'/video/medicine/part_2.mp4',
	'/video/medicine/part_3.mp4',
	'/video/medicine/part_4.mp4',
];

export default function Medicine({ funForCloseWidget }) {
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const videoRef = useRef(null);
	const isLastVideo = currentVideoIndex === videoList.length - 1;

	// Автоматическое воспроизведение видео при смене
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	}, [currentVideoIndex]);

	const handleVideoSelect = (index) => {
		setCurrentVideoIndex(index);
	};

	const handleNextButtonClick = () => {
		if (isLastVideo) {
			funForCloseWidget(false, "");
		} else {
			setCurrentVideoIndex(prevIndex => prevIndex + 1);
		}
	};

	return (
		<div className="video_container">
			<video 
				ref={videoRef} 
				autoPlay 
				muted
				key={currentVideoIndex}
			>
				<source src={videoList[currentVideoIndex]} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<button className="button_exit" onClick={() => funForCloseWidget(false, "")}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 73" fill="none">
					<line x1="4.06066" y1="1.93934" x2="74.0607" y2="71.9393" />
					<line x1="1.93934" y1="71.9393" x2="71.9393" y2="1.93934" />
				</svg>
			</button>

			<div className="block_controls">
				<div className="video_buttons">
					{videoList.map((_, index) => (
						<button
							key={index}
							className={`video_button ${currentVideoIndex === index ? 'active' : ''}`}
							onClick={() => handleVideoSelect(index)}
						>
							<span>Переключить на видео {index + 1}</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}