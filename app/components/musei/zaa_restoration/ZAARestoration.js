"use client";

import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';


import './zaa_restoration.css';
import MainScreen from './components/main_window/MainWindow';
import WelcomeScreen from './components/welcome_window/WelcomeWindow';


import art1 from './img/arts/art1.png';
import art2 from './img/arts/art2.png';
import art3 from './img/arts/art3.png';

const paintingsData = [
	{
		id: 1,
		title: "Богатыри",
		author: "Виктор Васнецов",
		year: "1898",
		image: art1
	},
	{
		id: 2,
		title: "Христос в шторм на Галилейском море",
		author: "Рембрандт",
		year: "1633",
		image: art2
	},
	{
		id: 3,
		title: "Огни большого города",
		author: "Артем Малыгин",
		year: "",
		image: art3
	}
];



const ZAARestoration = () => {
	const [appMini, setAppMini] = useState(false);

	const handleOpenClick = () => {
		setAppMini(false);

		setTimeout(() => {
			setButtonStartActive(true);
		}, 1000);
	};

	const [showWelcome, setShowWelcome] = useState(true);
	const [welcomeWindowHidden, setWelcomeWindowHidden] = useState(false);
	const [buttonStartActive, setButtonStartActive] = useState(true);

	const handleStartClick = () => {
		setWelcomeWindowHidden(true);

		setTimeout(() => {
			setShowWelcome(false);
		}, 1000);
	};

	return (
		<div className={`widget ${appMini ? "_mini" : ""}`} onClick={handleOpenClick}>
			<MainScreen paintingsData={paintingsData} />

			{showWelcome && (
				<WelcomeScreen stateWindow={showWelcome} stateButton={buttonStartActive} funForButton={handleStartClick} hiddenStatus={welcomeWindowHidden} />
			)}
		</div>
	);
}

export default ZAARestoration;