"use client";

import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import "./page.css";
import "./page_media.css";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import BlockVideo from '../components/video_biotech/block_video/BlockVideo';
import PopupAboutBlocked from '../components/video_biotech/popup_about_blocked/PopupAboutBlocked';

import VideoPlayer from '../components/video_biotech/video_player/VideoPlayer';



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

	const handleVideoPlayerShow = (open, src) => {
		if(open){
			setVideoSrc(src);
			setVideoPlayerShow(true);
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

					<VideoPlayer key="video-player" videoPlayerShow={videoPlayerShow} videoSrc={videoSrc} />


					<div className="list_video">
						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_1.png"}
							videoTimer={"08:48"}
							funForButton={() => handleVideoPlayerShow(true, "https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_1.mp4")}
							videoInfoHeader={"Получение и применение ГМ растений"}
							videoInfoDescription={"Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии лишь добавляют фракционных разногласий "}
						/>

						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_2.png"}
							videoTimer={"07:24"}
							funForButton={() => handleVideoPlayerShow(true, "https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_2.mp4")}
							videoInfoHeader={"Бактерии как объект биотехнологий"}
							videoInfoDescription={"Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии лишь добавляют фракционных разногласий"}
						/>

						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_3.png"}
							videoTimer={"24:18"}
							funForButton={() => handleVideoPlayerShow(true, "https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_3.mp4")}
							videoInfoHeader={"Объекты микробиологических технологий"}
							videoInfoDescription={"Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии лишь добавляют фракционных разногласий"}
						/>

						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_4.png"}
							videoTimer={"22:47"}
							funForButton={() => handleVideoPlayerShow(true, "https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_4.mp4")}
							videoInfoHeader={"Использование моноклональных и поликлональных антител в медицине"}
							videoInfoDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
						/>

						<BlockVideo
							videoBlocked={false}
							videoCoverSrc={"/img/video_biotech/cover_5.png"}
							videoTimer={"35:13"}
							funForButton={() => handleVideoPlayerShow(true, "https://s3.twcstorage.ru/e6b9f60a-42dc8220-bab7-406e-a09c-8252246c303b/pish_video/video-biotech/video_5.mp4")}
							videoInfoHeader={"Экологические и этические проблемы генной инженерии"}
							videoInfoDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
						/>

						{/* <BlockVideo
							videoBlocked={true}
							funForButton={() => handlePopupOpen(true)}
							videoInfoHeader={"Экологические и этические проблемы генной инженерии"}
						/> */}
					</div>
				</section>
			</main>

			<Footer isMobile={isMobile} patternsActive={true} />

			{popupHeroShow && <PopupAboutBlocked popupHeroOpen={popupHeroOpen} funForClose={() => handlePopupOpen(false)} />}
		</div>
	);
}