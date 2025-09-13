"use client";

import { useState, useEffect } from 'react';

import './welcome_screen.css';
import './welcome_screen_media.css';



export default function WelcomeScreen({ stateButton, funForButton, hiddenStatus }) {
	const [activeBlock, setActiveBlock] = useState(false);

	useEffect(() => {
		if(stateButton){
			const timer = setTimeout(() => {
				setActiveBlock(true);
			}, 200);

			return () => clearTimeout(timer);
		}
	}, [stateButton]);

	return (
		<div className={`welcome_window ${activeBlock ? "_active" : ''} ${hiddenStatus ? "_hidden" : ''}`}>
			<div className="info">
				<h1>Отреставрируйте картинку с помощью биотехнологий</h1>
				
				<p>
					Биотехнологии окружают нас повсюду - это и медицина, и экология, и промышленность, и продовольствие. 
					Но есть и совершенно неожиданные направления применения биотехнологических решений, например для защиты предметов
					искусства и сохранения культурного наследия
				</p>

				<div className="block_button">
					<button onClick={funForButton}>Начать</button>
				</div>
			</div>
		</div>
	);
};