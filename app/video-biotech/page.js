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

	const handleVideoPlayerShow = (open) => {
		if(open){
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

					<VideoPlayer key="video-player" videoPlayerShow={videoPlayerShow} />


					<div className="list_video">
						<BlockVideo
							videoBlocked={false}
							funForButton={() => handleVideoPlayerShow(true)}
							videoInfoHeader={"Получение и применение ГМ растений"}
							videoInfoDescription={"Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии лишь добавляют фракционных разногласий "}
						/>

						<BlockVideo
							videoBlocked={true}
							funForButton={() => handlePopupOpen(true)}
							videoInfoHeader={"Бактерии как объект биотехнологий"}
							videoInfoDescription={"Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии лишь добавляют фракционных разногласий"}
						/>

						<BlockVideo
							videoBlocked={true}
							funForButton={() => handlePopupOpen(true)}
							videoInfoHeader={"Объекты микробиологических технологий"}
							videoInfoDescription={"Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии лишь добавляют фракционных разногласий"}
						/>

						<BlockVideo
							videoBlocked={true}
							funForButton={() => handlePopupOpen(true)}
							videoInfoHeader={"Использование моноклональных и поликлональных антител в медицине"}
							videoInfoDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
						/>

						<BlockVideo
							videoBlocked={true}
							funForButton={() => handlePopupOpen(true)}
							videoInfoHeader={"Экологические и этические проблемы генной инженерии"}
						/>
					</div>
				</section>
			</main>

			<Footer isMobile={isMobile} patternsActive={true} />

			{popupHeroShow && <PopupAboutBlocked popupHeroOpen={popupHeroOpen} funForClose={() => handlePopupOpen(false)} />}
		</div>
	);
}