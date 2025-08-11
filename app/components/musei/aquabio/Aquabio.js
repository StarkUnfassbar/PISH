"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import './aquabio.css';


const videoList = [
	'/video/aquabio/part_1.mp4',
	'/video/aquabio/part_2.mp4',
	'/video/aquabio/part_3.mp4',
	'/video/aquabio/part_4.mp4',
	'/video/aquabio/part_5.mp4',
	'/video/aquabio/part_6.mp4',
	'/video/aquabio/part_7.mp4',
	'/video/aquabio/part_8.mp4',
];



export default function Aquabio({ funForCloseWidget }) {
	const [isPlaying, setIsPlaying] = useState(true);
	const [progress, setProgress] = useState(0);

	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const videoRef = useRef(null);
	const isLastVideo = currentVideoIndex === videoList.length - 1;

	// Обработчик воспроизведения/паузы
	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	// Обновление прогресс-бара
	const updateProgress = () => {
		if (videoRef.current) {
			const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
			setProgress(currentProgress);
		}
	};

	const playNextVideo = () => {
		setCurrentVideoIndex(prevIndex => 
			prevIndex < videoList.length - 1 ? prevIndex + 1 : 0
		);
		
		setIsPlaying(true);

		setProgress(0);
		videoRef.current.removeEventListener('timeupdate', updateProgress);

		setTimeout(() => {
			videoRef.current.addEventListener('timeupdate', updateProgress);
		}, 50);
	};

	// Установка обработчиков времени и окончания видео
	useEffect(() => {
		const video = videoRef.current;
		
		if (video) {
			video.addEventListener('timeupdate', updateProgress);
			video.addEventListener('ended', () => {
				setIsPlaying(false);
				setProgress(100);
			});

			return () => {
				video.removeEventListener('timeupdate', updateProgress);
				video.removeEventListener('ended', () => {
					setIsPlaying(false);
					setProgress(100);
				});
			};
		}
	}, []);


	const handleNextButtonClick = () => {
		if (isLastVideo) {
			funForCloseWidget(false, "");
		} else {
			playNextVideo();
		}
	};



	return (
		<div className="video_container">
			<video 
				ref={videoRef} 
				autoPlay 
				loop={true} 
				onClick={togglePlay}
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
				<div className="upper_part">
					<button className="play" onClick={togglePlay}>
						{isPlaying ? (
							<svg className="icon_pause" xmlns="http://www.w3.org/2000/svg" width="34" height="36" viewBox="0 0 34 36" fill="none">
								<path d="M33.5 3V33C33.4991 33.7954 33.1827 34.5579 32.6203 35.1203C32.0579 35.6827 31.2954 35.9991 30.5 36H23.75C22.9546 35.9991 22.1921 35.6827 21.6297 35.1203C21.0673 34.5579 20.7509 33.7954 20.75 33V3C20.7509 2.20463 21.0673 1.4421 21.6297 0.879684C22.1921 0.317272 22.9546 0.000909634 23.75 0H30.5C31.2954 0.000909634 32.0579 0.317272 32.6203 0.879684C33.1827 1.4421 33.4991 2.20463 33.5 3V3ZM10.25 0H3.5C2.70463 0.000909634 1.9421 0.317272 1.37968 0.879684C0.817272 1.4421 0.50091 2.20463 0.5 3V33C0.50091 33.7954 0.817272 34.5579 1.37968 35.1203C1.9421 35.6827 2.70463 35.9991 3.5 36H10.25C11.0454 35.9991 11.8079 35.6827 12.3703 35.1203C12.9327 34.5579 13.2491 33.7954 13.25 33V3C13.2491 2.20463 12.9327 1.4421 12.3703 0.879684C11.8079 0.317272 11.0454 0.000909634 10.25 0V0Z" fill="white"/>
							</svg>
						) : (
							<svg className="icon_play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 40" fill="none">
								<path d="M31.5586 17.4396L4.56445 0.942492C4.10977 0.664451 3.58921 0.512575 3.05635 0.50249C2.52349 0.492405 1.99756 0.624476 1.53268 0.885114C1.0678 1.14575 0.680752 1.52554 0.411369 1.98541C0.141987 2.44528 -5.74103e-06 2.96862 1.74094e-10 3.50157V36.4986C0.000433649 37.0314 0.1427 37.5545 0.412185 38.0141C0.681669 38.4737 1.06866 38.8533 1.53339 39.1138C1.99811 39.3744 2.52383 39.5065 3.05653 39.4967C3.58922 39.4868 4.10969 39.3353 4.56445 39.0577L31.5586 22.5607C31.9971 22.2925 32.3594 21.9162 32.6108 21.4679C32.8621 21.0195 32.9941 20.5141 32.9941 20.0001C32.9941 19.4861 32.8621 18.9807 32.6108 18.5324C32.3594 18.084 31.9971 17.7077 31.5586 17.4396Z"/>
							</svg>
						)}
					</button>

					<button className="next" onClick={handleNextButtonClick}>
						{currentVideoIndex === 0 ? (
							<span>Начать</span>
						) : isLastVideo ? (
							<span>Завершить</span>
						) : (
							<span>Продолжить</span>
						)}
					</button>
				</div>

				<div className="lower_part">
					<div className="progress_bar">
						<div className="progress_bg"></div>
						<div className="progress_fill" style={{ width: progress + '%' }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}