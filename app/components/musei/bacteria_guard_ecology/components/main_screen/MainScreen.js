"use client";

import { useState } from 'react';

import './main_screen.css';
import './main_screen_media.css';

import UpperPart from '../upper_part/UpperPart';
import DownPart from '../down_part/DownPart';


// Список правильных ответов для каждой бактерии
const CORRECT_ANSWERS = {
	"marine_bacteria": {
		slider1: "dizelnoe-toplivo",
		slider2: "neft"
	},
	"clostridium": {
		slider1: "karton",
		slider2: "bumaga"
	},
	"sphingomonas": {
		slider1: "sadovyi-shlang",
		slider2: "polietilenovyi-paket"
	},
	"flavobacteria": {
		slider1: "kraski-dlya-derevev",
		slider2: "emal-dlya-metalla"
	},
	"pediococcus": {
		slider1: "ovoshnaya-kozhura",
		slider2: "zaplesnevelyi-hleb"
	}
};

// Начальное состояние для всех бактерий
const INITIAL_BACTERIA_STATE = {
	"marine_bacteria": false,
	"clostridium": false,
	"sphingomonas": false,
	"flavobacteria": false,
	"pediococcus": false
};


import bgIllustrationImg from '../../img/bg_illustrations/bg.png';

import musorImg1 from '../../img/bg_illustrations/musor_1.png';
import musorImg2 from '../../img/bg_illustrations/musor_2.png';
import musorImg3 from '../../img/bg_illustrations/musor_3.png';
import musorImg4 from '../../img/bg_illustrations/musor_4.png';
import musorImg5 from '../../img/bg_illustrations/musor_5.png';



export default function MainScreen({ stateButton, funForButton, hiddenStatus }) {
	const [selectedBacteria, setSelectedBacteria] = useState(null);
	const [bacteriaVictoryState, setBacteriaVictoryState] = useState(INITIAL_BACTERIA_STATE);

	const handleBacteriaSelect = (bacteriaName) => {
		const bacteriaMap = {
			"Морские бактерии": "marine_bacteria",
			"Клостридия": "clostridium", 
			"Сфингомонады": "sphingomonas",
			"Флавобактерии": "flavobacteria",
			"Педиококки": "pediococcus"
		};
		
		const englishName = bacteriaMap[bacteriaName] || null;
		setSelectedBacteria(englishName);
	};

	const handleRestart = () => {
		setSelectedBacteria(null);
		setBacteriaVictoryState(INITIAL_BACTERIA_STATE);
	};

	const checkAnswer = (slider1Id, slider2Id) => {
		if (!selectedBacteria) return false;
		
		const correctAnswer = CORRECT_ANSWERS[selectedBacteria];
		if (!correctAnswer) return false;
		
		const isCorrect = slider1Id === correctAnswer.slider1 && slider2Id === correctAnswer.slider2;
		console.log('Answer is correct:', isCorrect);
		
		// Если ответ правильный, обновляем состояние победы для этой бактерии
		if (isCorrect) {
			setBacteriaVictoryState(prevState => ({
				...prevState,
				[selectedBacteria]: true
			}));
		}
		
		return isCorrect;
	};

	return (
		<div className={`main_screen ${hiddenStatus ? "_hidden" : ''}`}>
			<div className="choosing_bacterium">
				<UpperPart 
					selectedBacteria={selectedBacteria}
					onBacteriaSelect={handleBacteriaSelect}
					onRestart={handleRestart}
					bacteriaVictoryState={bacteriaVictoryState}
				/>

				<DownPart 
					selectedBacteria={selectedBacteria} 
					onCheckAnswer={checkAnswer}
				/>
			</div>

			<div className="block_bg">
				<img className="bg_illustration" src={bgIllustrationImg.src} alt=""></img>

				<div className="musur_illustrations">
					<img className={`musor_illustration ${bacteriaVictoryState.marine_bacteria ? "_victory" : ""}`} src={musorImg1.src} alt=""></img>
					<img className={`musor_illustration ${bacteriaVictoryState.clostridium ? "_victory" : ""}`} src={musorImg2.src} alt=""></img>
					<img className={`musor_illustration ${bacteriaVictoryState.sphingomonas ? "_victory" : ""}`} src={musorImg3.src} alt=""></img>
					<img className={`musor_illustration ${bacteriaVictoryState.flavobacteria ? "_victory" : ""}`} src={musorImg4.src} alt=""></img>
					<img className={`musor_illustration ${bacteriaVictoryState.pediococcus ? "_victory" : ""}`} src={musorImg5.src} alt=""></img>
				</div>
			</div>
		</div>
	);
}