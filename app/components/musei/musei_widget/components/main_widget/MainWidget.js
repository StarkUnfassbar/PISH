"use client";

import { useState } from 'react';


import './window_1/main_widget_w1.css';
import './window_1/main_widget_w1_media.css';

import './window_2/main_widget_w2.css';
import './window_2/main_widget_w2_media.css';

import './window_3/main_widget_w3.css';
import './window_3/main_widget_w3_media.css';


import ExhibitInDev from '../exhibit_in_dev/ExhibitInDev';
import ZAARestoration from '../../../zaa_restoration/ZAARestoration';
import ControllerWidgets from '../controller_widgets/ControllerWidgets';



export default function MainWidget() {
	const [window1Active, setWindow1Active] = useState(true);
	const [window1Hidden, setWindow1Hidden] = useState(false);
	const [window1Open, setWindow1Open] = useState(true);

	const [window2Active, setWindow2Active] = useState(false);
	const [window2Hidden, setWindow2Hidden] = useState(true);
	const [window2Open, setWindow2Open] = useState(false);

	const [window3Active, setWindow3Active] = useState(false);
	const [window3Hidden, setWindow3Hidden] = useState(true);
	const [window3Open, setWindow3Open] = useState(false);

	const [window4Active, setWindow4Active] = useState(false);
	const [window4Hidden, setWindow4Hidden] = useState(true);
	const [window4Open, setWindow4Open] = useState(false);

	const handleWindowOpen = (index) => {
		if(index === 1){
			setWindow1Active(true);
			setWindow1Open(true);

			setTimeout(() => {
				setWindow1Hidden(false);
			}, 50);

			setTimeout(() => {
				setWindow2Active(false);
				setWindow2Hidden(true);
				setWindow2Open(false);

				setWindow3Active(false);
				setWindow3Hidden(true);
				setWindow3Open(false);

				setWindow1Open(false);
			}, 1100);
		} else if(index === 2){
			setWindow2Active(true);
			setWindow2Open(true);

			setTimeout(() => {
				setWindow2Hidden(false);
			}, 50);

			setTimeout(() => {
				setWindow1Active(false);
				setWindow1Hidden(true);
				setWindow1Open(false);

				setWindow3Active(false);
				setWindow3Hidden(true);
				setWindow3Open(false);

				setWindow2Open(false);
			}, 1050);
		} else if(index === 3){
			setWindow3Active(true);
			setWindow3Open(true);

			setTimeout(() => {
				setWindow3Hidden(false);
			}, 50);

			setTimeout(() => {
				setWindow1Active(false);
				setWindow1Hidden(true);
				setWindow1Open(false);

				setWindow2Active(false);
				setWindow2Hidden(true);
				setWindow2Open(false);

				setWindow3Open(false);
			}, 1100);
		}
	};


	const [exhibitOpen, setExhibitOpen] = useState(false);

	const handleExhibitOpen = () => {
		setExhibitOpen(true);

		setWindow1Active(false);
		setWindow2Active(false);
		setWindow3Active(false);
	};


	const [tipLines, setTipLines] = useState([
		"Добро пожаловать в музей Передовой Инженерной школы ДВФУ!",
		"Для того чтобы начать, выберите экспонат и нажмите на него"
	]);

	const handleTransitionHover = (isHovering, type) => {
		if (isHovering) {
			if(type === "transition") {
				setTipLines(["Нажмите на подсказку для того, чтобы переместиться в другую часть музея"]);
			} else if(type === "exhibit") {
				setTipLines(["Нажмите на экран экспоната, чтобы открыть приложение"]);
			}
		} else {
			setTipLines([
				"Добро пожаловать в музей Передовой Инженерной школы ДВФУ!",
				"Для того чтобы начать, выберите экспонат и нажмите на него"
			]);
		}
	};


	const [exhibitInDevOpen, setExhibitInDevOpen] = useState(false);

	const handleExhibitInDevOpen = (exhibitInDev) => {
		if(exhibitInDev){
			setExhibitInDevOpen(true);
		} else{
			setExhibitInDevOpen(false);
		}
	};


	const [openWidget, setOpenWidget] = useState(false);
	const [idOpenedWidget, setIdOpenedWidget] = useState("");

	const handleOpenWidget = (open, id) => {
		if(open){
			setOpenWidget(true);
			setIdOpenedWidget(id);
		} else{
			setOpenWidget(false);
			setIdOpenedWidget("");
		}
	};



	return (
		<>
			{window1Active && (
				<div className={`window window_1 ${window1Open ? "_open" : ''} ${window1Hidden ? "_hidden" : ''}`}>
					<video autoPlay loop muted>
						<source src="/video/musei/video_1.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>


					<div className="block_transitions">
						<div className="block_transition" onMouseEnter={() => handleTransitionHover(true, "transition")} onMouseLeave={() => handleTransitionHover(false, "transition")}>
							<button onClick={() => handleWindowOpen(2)}>
								<span className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 68" fill="none">
										<path d="M34.8581 13.3444C36.7182 16.309 37.4593 19.6716 37.1864 22.9268C36.5419 22.7163 35.8844 22.5489 35.219 22.4236C35.3864 19.5828 34.6671 16.6659 32.9731 14.1119C28.8191 7.84922 20.3745 6.13975 14.1118 10.2937C7.84928 14.4478 6.13974 22.8923 10.2937 29.155C11.988 31.7093 14.3964 33.5051 17.0791 34.4557C16.9357 35.1175 16.8343 35.7882 16.7775 36.4639C13.5535 35.4108 10.6474 33.3064 8.627 30.2605L8.40895 29.9211C3.99671 22.8884 5.87339 13.6163 12.6737 8.85351L13.0063 8.62705C20.1895 3.86251 29.8752 5.82323 34.6397 13.0064L34.8581 13.3444Z" fill="white"/>
										<path d="M47.6261 32.5933C52.1099 39.7394 50.0994 49.1986 43.0284 53.8887L42.6899 54.1062C35.5438 58.59 26.0852 56.5803 21.395 49.5094L21.177 49.1701C17.4316 43.2 18.2188 35.6168 22.7021 30.5478C22.7651 30.6671 22.8345 30.7845 22.9106 30.8993C23.2211 31.3673 23.6126 31.7495 24.0534 32.0409C20.2022 36.5438 19.6242 43.2211 23.0617 48.4039C27.2157 54.6664 35.6603 56.3759 41.9229 52.222C48.1856 48.0681 49.8949 39.6235 45.7411 33.3608C42.3036 28.1787 35.9281 26.1136 30.2823 27.9093C30.1853 27.3901 29.9846 26.8809 29.6742 26.413C29.5983 26.2985 29.5172 26.1892 29.432 26.085C35.9675 23.8856 43.4151 26.2362 47.4078 32.2553L47.6261 32.5933Z" fill="white"/>
										<path d="M20.2094 18.6549C19.8576 18.5837 19.5146 18.8112 19.4434 19.163L18.2827 24.8967C18.2114 25.2486 18.4389 25.5915 18.7908 25.6628C19.1426 25.734 19.4856 25.5065 19.5568 25.1546L20.5886 20.058L25.6852 21.0897C26.037 21.161 26.38 20.9335 26.4512 20.5816C26.5224 20.2298 26.295 19.8868 25.9431 19.8156L20.2094 18.6549ZM34.5737 41.1425L35.1154 40.7832L20.6221 18.9327L20.0804 19.292L19.5388 19.6513L34.0321 41.5017L34.5737 41.1425Z" fill="white"/>
										<rect x="56.229" y="47.0081" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-44.6832 56.229 47.0081)" fill="white"/>
										<rect x="54.1865" y="46.6802" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-82.9264 54.1865 46.6802)" fill="white"/>
										<rect x="52.2793" y="47.3253" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-129.595 52.2793 47.3253)" fill="white"/>
										<rect x="51.7256" y="49.359" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-179.8 51.7256 49.359)" fill="white"/>
										<rect x="52.373" y="51.5305" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(146.907 52.373 51.5305)" fill="white"/>
										<path d="M70.6028 62.6413C66.5717 67.8959 58.1731 62.926 56.2897 62.0789C54.9443 61.4738 55.0791 59.0205 56.9483 59.2538C58.8175 59.4871 60.7071 59.8887 60.4325 59.5357C59.7732 58.6883 54.0296 51.3147 53.4626 50.4029C52.3794 48.6611 54.027 47.1071 55.5339 48.5193C57.1865 50.068 61.4991 56.3025 61.138 55.7219C60.461 54.6332 59.2673 53.1583 59.0187 52.4736C58.6092 51.3452 59.8659 50.5901 60.4309 50.9667C61.1512 51.4467 62.8797 53.4145 63.4918 54.0265C63.6959 54.2305 61.8907 52.1435 61.7022 51.2019C61.5137 50.2602 62.7676 49.6679 63.4441 50.1187C64.0091 50.4952 65.2806 51.9545 65.5631 52.1428C65.7629 52.276 64.9765 50.9804 64.7153 50.3538C64.2443 49.2239 65.8517 48.6923 66.4572 49.2706C68.5763 51.2948 74.8191 57.1454 70.6028 62.6413Z" stroke="white" strokeWidth="1.2"/>
									</svg>
								</span>

								<span className="text">Нажмите, чтобы переместиться</span>
							</button>
						</div>

						{/* <div className="block_transition" onMouseEnter={() => handleTransitionHover(true, "transition")} onMouseLeave={() => handleTransitionHover(false, "transition")}>
							<button onClick={() => handleWindowOpen(3)}>
								<span className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 68" fill="none">
										<path d="M34.8581 13.3444C36.7182 16.309 37.4593 19.6716 37.1864 22.9268C36.5419 22.7163 35.8844 22.5489 35.219 22.4236C35.3864 19.5828 34.6671 16.6659 32.9731 14.1119C28.8191 7.84922 20.3745 6.13975 14.1118 10.2937C7.84928 14.4478 6.13974 22.8923 10.2937 29.155C11.988 31.7093 14.3964 33.5051 17.0791 34.4557C16.9357 35.1175 16.8343 35.7882 16.7775 36.4639C13.5535 35.4108 10.6474 33.3064 8.627 30.2605L8.40895 29.9211C3.99671 22.8884 5.87339 13.6163 12.6737 8.85351L13.0063 8.62705C20.1895 3.86251 29.8752 5.82323 34.6397 13.0064L34.8581 13.3444Z" fill="white"/>
										<path d="M47.6261 32.5933C52.1099 39.7394 50.0994 49.1986 43.0284 53.8887L42.6899 54.1062C35.5438 58.59 26.0852 56.5803 21.395 49.5094L21.177 49.1701C17.4316 43.2 18.2188 35.6168 22.7021 30.5478C22.7651 30.6671 22.8345 30.7845 22.9106 30.8993C23.2211 31.3673 23.6126 31.7495 24.0534 32.0409C20.2022 36.5438 19.6242 43.2211 23.0617 48.4039C27.2157 54.6664 35.6603 56.3759 41.9229 52.222C48.1856 48.0681 49.8949 39.6235 45.7411 33.3608C42.3036 28.1787 35.9281 26.1136 30.2823 27.9093C30.1853 27.3901 29.9846 26.8809 29.6742 26.413C29.5983 26.2985 29.5172 26.1892 29.432 26.085C35.9675 23.8856 43.4151 26.2362 47.4078 32.2553L47.6261 32.5933Z" fill="white"/>
										<path d="M20.2094 18.6549C19.8576 18.5837 19.5146 18.8112 19.4434 19.163L18.2827 24.8967C18.2114 25.2486 18.4389 25.5915 18.7908 25.6628C19.1426 25.734 19.4856 25.5065 19.5568 25.1546L20.5886 20.058L25.6852 21.0897C26.037 21.161 26.38 20.9335 26.4512 20.5816C26.5224 20.2298 26.295 19.8868 25.9431 19.8156L20.2094 18.6549ZM34.5737 41.1425L35.1154 40.7832L20.6221 18.9327L20.0804 19.292L19.5388 19.6513L34.0321 41.5017L34.5737 41.1425Z" fill="white"/>
										<rect x="56.229" y="47.0081" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-44.6832 56.229 47.0081)" fill="white"/>
										<rect x="54.1865" y="46.6802" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-82.9264 54.1865 46.6802)" fill="white"/>
										<rect x="52.2793" y="47.3253" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-129.595 52.2793 47.3253)" fill="white"/>
										<rect x="51.7256" y="49.359" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-179.8 51.7256 49.359)" fill="white"/>
										<rect x="52.373" y="51.5305" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(146.907 52.373 51.5305)" fill="white"/>
										<path d="M70.6028 62.6413C66.5717 67.8959 58.1731 62.926 56.2897 62.0789C54.9443 61.4738 55.0791 59.0205 56.9483 59.2538C58.8175 59.4871 60.7071 59.8887 60.4325 59.5357C59.7732 58.6883 54.0296 51.3147 53.4626 50.4029C52.3794 48.6611 54.027 47.1071 55.5339 48.5193C57.1865 50.068 61.4991 56.3025 61.138 55.7219C60.461 54.6332 59.2673 53.1583 59.0187 52.4736C58.6092 51.3452 59.8659 50.5901 60.4309 50.9667C61.1512 51.4467 62.8797 53.4145 63.4918 54.0265C63.6959 54.2305 61.8907 52.1435 61.7022 51.2019C61.5137 50.2602 62.7676 49.6679 63.4441 50.1187C64.0091 50.4952 65.2806 51.9545 65.5631 52.1428C65.7629 52.276 64.9765 50.9804 64.7153 50.3538C64.2443 49.2239 65.8517 48.6923 66.4572 49.2706C68.5763 51.2948 74.8191 57.1454 70.6028 62.6413Z" stroke="white" strokeWidth="1.2"/>
									</svg>
								</span>

								<span className="text">Нажмите, чтобы переместиться</span>
							</button>
						</div> */}
					</div>
					
					<div className="block_exhibits">
						{/* <div className="block_exhibit" onMouseEnter={() => handleTransitionHover(true, "exhibit")} onMouseLeave={() => handleTransitionHover(false, "exhibit")}>
							<button onClick={() => handleOpenWidget(true, "medicine")}></button>
						</div> */}

						<div className="block_exhibit" onMouseEnter={() => handleTransitionHover(true, "exhibit")} onMouseLeave={() => handleTransitionHover(false, "exhibit")}>
							<button onClick={() => handleOpenWidget(true, "widget_in_dev")}></button>
						</div>

						<div className="block_exhibit" onMouseEnter={() => handleTransitionHover(true, "exhibit")} onMouseLeave={() => handleTransitionHover(false, "exhibit")}>
							<button onClick={() => handleOpenWidget(true, "widget_in_dev")}></button>
						</div>
					</div>


					<div className="block_tip">
						{tipLines.map((line, index) => (
							<p key={index} className="tip-line">{line}</p>
						))}
					</div>
				</div>		
			)}

			{window2Active && (
				<div className={`window window_2 ${window2Open ? "_open" : ''} ${window2Hidden ? "_hidden" : ''}`}>
					<video autoPlay loop muted>
						<source src="/video/video2.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>


					<div className="block_transitions">
						<div className="block_transition" onMouseEnter={() => handleTransitionHover(true, "transition")} onMouseLeave={() => handleTransitionHover(false, "transition")}>
							<button onClick={() => handleWindowOpen(3)}>
								<span className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 68" fill="none">
										<path d="M34.8581 13.3444C36.7182 16.309 37.4593 19.6716 37.1864 22.9268C36.5419 22.7163 35.8844 22.5489 35.219 22.4236C35.3864 19.5828 34.6671 16.6659 32.9731 14.1119C28.8191 7.84922 20.3745 6.13975 14.1118 10.2937C7.84928 14.4478 6.13974 22.8923 10.2937 29.155C11.988 31.7093 14.3964 33.5051 17.0791 34.4557C16.9357 35.1175 16.8343 35.7882 16.7775 36.4639C13.5535 35.4108 10.6474 33.3064 8.627 30.2605L8.40895 29.9211C3.99671 22.8884 5.87339 13.6163 12.6737 8.85351L13.0063 8.62705C20.1895 3.86251 29.8752 5.82323 34.6397 13.0064L34.8581 13.3444Z" fill="white"/>
										<path d="M47.6261 32.5933C52.1099 39.7394 50.0994 49.1986 43.0284 53.8887L42.6899 54.1062C35.5438 58.59 26.0852 56.5803 21.395 49.5094L21.177 49.1701C17.4316 43.2 18.2188 35.6168 22.7021 30.5478C22.7651 30.6671 22.8345 30.7845 22.9106 30.8993C23.2211 31.3673 23.6126 31.7495 24.0534 32.0409C20.2022 36.5438 19.6242 43.2211 23.0617 48.4039C27.2157 54.6664 35.6603 56.3759 41.9229 52.222C48.1856 48.0681 49.8949 39.6235 45.7411 33.3608C42.3036 28.1787 35.9281 26.1136 30.2823 27.9093C30.1853 27.3901 29.9846 26.8809 29.6742 26.413C29.5983 26.2985 29.5172 26.1892 29.432 26.085C35.9675 23.8856 43.4151 26.2362 47.4078 32.2553L47.6261 32.5933Z" fill="white"/>
										<path d="M20.2094 18.6549C19.8576 18.5837 19.5146 18.8112 19.4434 19.163L18.2827 24.8967C18.2114 25.2486 18.4389 25.5915 18.7908 25.6628C19.1426 25.734 19.4856 25.5065 19.5568 25.1546L20.5886 20.058L25.6852 21.0897C26.037 21.161 26.38 20.9335 26.4512 20.5816C26.5224 20.2298 26.295 19.8868 25.9431 19.8156L20.2094 18.6549ZM34.5737 41.1425L35.1154 40.7832L20.6221 18.9327L20.0804 19.292L19.5388 19.6513L34.0321 41.5017L34.5737 41.1425Z" fill="white"/>
										<rect x="56.229" y="47.0081" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-44.6832 56.229 47.0081)" fill="white"/>
										<rect x="54.1865" y="46.6802" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-82.9264 54.1865 46.6802)" fill="white"/>
										<rect x="52.2793" y="47.3253" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-129.595 52.2793 47.3253)" fill="white"/>
										<rect x="51.7256" y="49.359" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(-179.8 51.7256 49.359)" fill="white"/>
										<rect x="52.373" y="51.5305" width="2.88089" height="0.960298" rx="0.480149" transform="rotate(146.907 52.373 51.5305)" fill="white"/>
										<path d="M70.6028 62.6413C66.5717 67.8959 58.1731 62.926 56.2897 62.0789C54.9443 61.4738 55.0791 59.0205 56.9483 59.2538C58.8175 59.4871 60.7071 59.8887 60.4325 59.5357C59.7732 58.6883 54.0296 51.3147 53.4626 50.4029C52.3794 48.6611 54.027 47.1071 55.5339 48.5193C57.1865 50.068 61.4991 56.3025 61.138 55.7219C60.461 54.6332 59.2673 53.1583 59.0187 52.4736C58.6092 51.3452 59.8659 50.5901 60.4309 50.9667C61.1512 51.4467 62.8797 53.4145 63.4918 54.0265C63.6959 54.2305 61.8907 52.1435 61.7022 51.2019C61.5137 50.2602 62.7676 49.6679 63.4441 50.1187C64.0091 50.4952 65.2806 51.9545 65.5631 52.1428C65.7629 52.276 64.9765 50.9804 64.7153 50.3538C64.2443 49.2239 65.8517 48.6923 66.4572 49.2706C68.5763 51.2948 74.8191 57.1454 70.6028 62.6413Z" stroke="white" strokeWidth="1.2"/>
									</svg>
								</span>

								<span className="text">Нажмите, чтобы переместиться</span>
							</button>
						</div>
					</div>

					<div className="block_exhibits">
						<div className="block_exhibit" onMouseEnter={() => handleTransitionHover(true, "exhibit")} onMouseLeave={() => handleTransitionHover(false, "exhibit")}>
							<button onClick={() => handleOpenWidget(true, "zaa_restoration")}></button>
						</div>

						<div className="block_exhibit" onMouseEnter={() => handleTransitionHover(true, "exhibit")} onMouseLeave={() => handleTransitionHover(false, "exhibit")}>
							<button onClick={() => handleOpenWidget(true, "widget_in_dev")}></button>
						</div>
					</div>


					<div className="block_buttons_transition">
						<button onClick={() => handleWindowOpen(1)}>Вернуться в начало</button>
					</div>


					<div className="block_tip">
						{tipLines.map((line, index) => (
							<p key={index} className="tip-line">{line}</p>
						))}
					</div>
				</div>	
			)}

			{window3Active && (
				<div className={`window window_3 ${window3Open ? "_open" : ''} ${window3Hidden ? "_hidden" : ''}`}>
					<video autoPlay loop muted>
						<source src="/video/video3.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>


					<div className="block_exhibits">
						<div className="block_exhibit" onMouseEnter={() => handleTransitionHover(true, "exhibit")} onMouseLeave={() => handleTransitionHover(false, "exhibit")}>
							<button onClick={() => handleOpenWidget(true, "widget_in_dev")}></button>
						</div>

						<div className="block_exhibit" onMouseEnter={() => handleTransitionHover(true, "exhibit")} onMouseLeave={() => handleTransitionHover(false, "exhibit")}>
							<button onClick={() => handleOpenWidget(true, "aquabio")}></button>
						</div>

						<div className="block_exhibit" onMouseEnter={() => handleTransitionHover(true, "exhibit")} onMouseLeave={() => handleTransitionHover(false, "exhibit")}>
							<button onClick={() => handleOpenWidget(true, "widget_in_dev")}></button>
						</div>
					</div>


					<div className="block_buttons_transition">
						<button onClick={() => handleWindowOpen(2)}>Сделать шаг назад</button>
						<button onClick={() => handleWindowOpen(1)}>Вернуться в начало</button>
					</div>


					<div className="block_tip">
						{tipLines.map((line, index) => (
							<p key={index} className="tip-line">{line}</p>
						))}
					</div>
				</div>
			)}



			<ControllerWidgets openWidget={openWidget} idOpenedWidget={idOpenedWidget} funForCloseWidget={handleOpenWidget} />
		</>
	);
}