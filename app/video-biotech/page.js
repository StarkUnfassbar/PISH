"use client";

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import "./page.css";
import "./page_media.css";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import BlockVideo from '../components/video_biotech/block_video/BlockVideo';
import PopupAboutBlocked from '../components/video_biotech/popup_about_blocked/PopupAboutBlocked';

import VideoPlayer from '../components/video_biotech/video_player/VideoPlayer';
import VideoPlayerMobile from '../components/video_biotech/video_player/video_player_mobile/VideoPlayerMobile';



export default function VideoBiotech() {
	const [isMobile, setIsMobile] = useState(null);
	
	useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1100);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


	const [popupHeroShow, setPopupHeroShow] = useState(false);
	const [popupHeroOpen, setPopupHeroOpen] = useState(false);

	const handlePopupOpen = (open) => {
		if(open){
			setPopupHeroShow(true);

			setTimeout(() => {
				setPopupHeroOpen(true);
			}, 50);
		} else{
			setPopupHeroOpen(false);

			setTimeout(() => {
				setPopupHeroShow(false);
			}, 310);
		}
	};


	const [videoPlayerShow, setVideoPlayerShow] = useState(false);
	const [videoSrc, setVideoSrc] = useState("");
	const [videoTitle, setVideoTitle] = useState(""); // Добавляем состояние для заголовка

	// Функция для определения позиции скролла в зависимости от ширины экрана
	const getScrollPosition = () => {
		const screenWidth = window.innerWidth;
		
		if (screenWidth > 2000) {
			return 125; // для экранов больше 2000px
		} else if (screenWidth < 1800) {
			return 100;  // для экранов меньше 1800px
		} else {
			return 110; // стандартное значение
		}
	};

	// Обновляем функцию для принятия заголовка
	const handleVideoPlayerShow = (open, src, title = "") => {
		if(open){
			setVideoSrc(src);
			setVideoTitle(title); // Устанавливаем заголовок
			setVideoPlayerShow(true);
			
			// Плавный скролл к адаптивной позиции
			const scrollPosition = getScrollPosition();
			window.scrollTo({
				top: scrollPosition,
				behavior: 'smooth'
			});
		} else{
			setVideoPlayerShow(false);
		}
	};



	if (isMobile === null) {
        return null;
    }

	return (
		<div className="video_biotech">
			<Header isMobile={isMobile} />

			<main>
				<section className="video_content">
					{!videoPlayerShow && (
						<h1>Видеоуроки о биотехе</h1>
					)}

					{isMobile ? (
						<VideoPlayerMobile 
							key="video-player" 
							videoPlayerShow={videoPlayerShow} 
							videoSrc={videoSrc} 
							videoTitle={videoTitle} // Передаем заголовок
						/>
					) : (
						<VideoPlayer 
							key="video-player" 
							videoPlayerShow={videoPlayerShow} 
							videoSrc={videoSrc} 
							videoTitle={videoTitle} // Передаем заголовок
						/>
					)}


					<div className="list_video">
						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_1.png"}
							videoTimer={"08:48"}
							funForButton={() => handleVideoPlayerShow(
								true, 
								"https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_1.mp4",
								"Получение и применение генетически модифицированных растений" // Передаем заголовок
							)}
							videoInfoHeader={"«Получение и применение генетически модифицированных растений»"}
							videoInfoDescription={"От создания супер-культур, побеждающих голод, до «золотого риса», спасающего миллионы людей от болезней."}
						/>

						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_2.png"}
							videoTimer={"07:24"}
							funForButton={() => handleVideoPlayerShow(
								true, 
								"https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_2.mp4",
								"Бактерии как объект биотехнологий" // Передаем заголовок
							)}
							videoInfoHeader={"«Бактерии как объект биотехнологии»"}
							videoInfoDescription={"Как бактерии совершают революцию в медицине, производят топливо будущего и создают любимые продукты питания."}
						/>

						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_3.png"}
							videoTimer={"24:18"}
							funForButton={() => handleVideoPlayerShow(
								true, 
								"https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_3.mp4",
								"Объекты микробиологических технологий" // Передаем заголовок
							)}
							videoInfoHeader={"«Объекты микробиологических технологий»"}
							videoInfoDescription={"Фабрики микробов, день и ночь производящие антибиотики, витамины и ферменты, меняя будущее."}
						/>

						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_4.png"}
							videoTimer={"22:47"}
							funForButton={() => handleVideoPlayerShow(
								true, 
								"https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_4.mp4",
								"Использование моноклональных и поликлональных антител в медицине" // Передаем заголовок
							)}
							videoInfoHeader={"«Использование моноклональных и поликлональных антител в медицине»"}
							videoInfoDescription={"Как умные антитела стали новым словом в лечении рака и победе над опасными вирусами."}
						/>

						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_5.png"}
							videoTimer={"35:13"}
							funForButton={() => handleVideoPlayerShow(
								true, 
								"https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_5.mp4",
								"Экологические и этические проблемы генной инженерии" // Передаем заголовок
							)}
							videoInfoHeader={"«Экологические и этические проблемы генной инженерии»"}
							videoInfoDescription={"«За» и «против» генной инженерии — от редактирования ДНК человека до этичных границ науки будущего."}
						/>
					</div>
				</section>
			</main>

			<Footer isMobile={isMobile} patternsActive={true} />

			{popupHeroShow && <PopupAboutBlocked popupHeroOpen={popupHeroOpen} funForClose={() => handlePopupOpen(false)} />}
		</div>
	);
}