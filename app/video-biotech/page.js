"use client";

import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import "./page.css";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import BlockVideo from '../components/video_biotech/block_video/BlockVideo';
import PopupAboutBlocked from '../components/video_biotech/popup_about_blocked/PopupAboutBlocked';



export default function VideoBiotech() {
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



	return (
		<div className="app">
			<Header />

			<main>
				<section className="video_content">
					<h1>Видеоуроки о биотехе</h1>

					<div className="list_video">
						<BlockVideo
							videoBlocked={false}
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

			{popupHeroShow && <PopupAboutBlocked popupHeroOpen={popupHeroOpen} funForClose={() => handlePopupOpen(false)} />}
		</div>
	);
}