"use client";

import { useState } from 'react';
import Image from "next/image";

import './welcome_part.css';
import './welcome_part_media.css';

import imgDnk from '../../img/level_1/dnk.png';
import imgRnk from '../../img/level_1/rnk.png';
import imgHint1 from '../../img/level_1/welcome_part/2.png';
import imgHint2 from '../../img/level_1/welcome_part/3.png';
import imgGen1 from '../../img/level_1/select_gen/1.png';
import imgGen2 from '../../img/level_1/select_gen/2.png';



export default function WelcomePart({ onRemoveFromDOM, onMainPartShow }) {
	const [showWelcomeButton, setShowWelcomeButton] = useState(true);
	const [showSelectGen, setShowSelectGen] = useState(false);
	const [selectGenActive, setSelectGenActive] = useState(false);
	const [welcomePartHidden, setWelcomePartHidden] = useState(false);
	const [showNewBlock, setShowNewBlock] = useState(false);
	const [welcomeContentHidden, setWelcomeContentHidden] = useState(false);
	const [newBlockHidden, setNewBlockHidden] = useState(true);

	const handleStartButtonClick = () => {
		setShowWelcomeButton(false);
		setShowSelectGen(true);
		
		setTimeout(() => {
			setSelectGenActive(true);
		}, 50);
	};

	const handleGeneSelect = () => {
		setSelectGenActive(false);
		
		setTimeout(() => {
			setShowSelectGen(false);
			setWelcomeContentHidden(true);
			
			setTimeout(() => {
				setShowNewBlock(true);
				setTimeout(() => {
					setNewBlockHidden(false);
				}, 50);
				
				setTimeout(() => {
					setWelcomePartHidden(true);
					
					setTimeout(() => {
						onRemoveFromDOM();
						onMainPartShow();
					}, 100);
				}, 2700);
			}, 300);
		}, 700);
	};

	return (
		<div className={`welcome_part ${welcomePartHidden ? "_hidden" : ''}`}>
			<div className={`welcome_content ${welcomeContentHidden ? "_hidden" : ''}`}>
				<div className="block_img_gen">
					<picture style={{ position: "absolute", width: "100%", height: "100%"}}>
						<source srcSet={imgDnk.src} type="image/webp" />
						<source srcSet={imgDnk.src} type="image/jpeg" />
						<Image 
							src={imgDnk} 
							alt="" 
							fill
							unoptimized={true}
							objectFit='cover'
                            objectPosition='center -50px'
						/>
					</picture>
				</div>

				<div className="block_hints">
					<div className="block_hint">
						<picture style={{ position: "absolute", width: "100%", height: "100%"}}>
							<source srcSet={imgHint1.src} type="image/webp" />
							<source srcSet={imgHint1.src} type="image/jpeg" />
							<Image 
								src={imgHint1} 
								alt="" 
								fill
								unoptimized={true}
								objectFit='cover'
							/>
						</picture>
					</div>

					<div className="block_hint">
						<picture style={{ position: "absolute", width: "100%", height: "100%"}}>
							<source srcSet={imgHint2.src} type="image/webp" />
							<source srcSet={imgHint2.src} type="image/jpeg" />
							<Image 
								src={imgHint2} 
								alt="" 
								fill
								unoptimized={true}
								objectFit='cover'
							/>
						</picture>
					</div>
				</div>

				{showWelcomeButton && (
					<div className="block_button">
						<button onClick={handleStartButtonClick}>
							<span className="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="91" height="127" viewBox="0 0 91 127" fill="none">
									<circle cx="15.5" cy="73.5015" r="6.5" stroke="#93ACFC" strokeWidth="6"/>
									<circle cx="43" cy="43.0015" r="9" stroke="#93ACFC" strokeWidth="6"/>
									<circle cx="42.5" cy="42.5015" r="22.5" stroke="#93ACFC" strokeWidth="6"/>
									<circle cx="69.5" cy="12.5015" r="6.5" stroke="#93ACFC" strokeWidth="6"/>
									<circle cx="51.5" cy="3.50146" r="3.5" fill="#93ACFC"/>
									<path d="M84.8323 32.8965C83.1372 26.7508 77.8323 17.3965 77.8323 17.3965L73.3323 20.8965C73.3323 20.8965 78.029 27.9089 79.3323 32.8965C81.8146 42.3965 79.0624 52.3965 77.8323 56.3966C75.5257 63.8965 69.0603 69.8965 64.8324 73.3961C57.6234 79.3633 50.8325 79.3826 49 80.6044C47.1675 81.8263 47.0371 83.8462 49 84.5C50.9629 85.1538 59.5 83.724 67.3324 77.8961C74.7235 72.3965 81.5094 65.3965 83.8324 56.3966C85.8821 48.4558 86.3492 38.3964 84.8323 32.8965Z" fill="#93ACFC"/>
									<path d="M0.893692 52.6085C2.58879 58.7543 7.89368 68.1085 7.89368 68.1085L12.3937 64.6085C12.3937 64.6085 7.69695 57.5961 6.39369 52.6085C3.91133 43.1085 6.66351 33.1085 7.8937 29.1084C10.2002 21.6085 16.6657 15.6085 20.8935 12.1089C28.1026 6.14171 39.5609 5.22579 41.3934 4.00396C43.226 2.78212 43.3563 0.762219 41.3934 0.108405C39.4306 -0.545408 26.226 1.78096 18.3935 7.60894C11.0024 13.1085 4.21653 20.1085 1.89352 29.1084C-0.1561 37.0492 -0.623266 47.1086 0.893692 52.6085Z" fill="#93ACFC"/>
									<path d="M27 125.501C27 125.501 17.8839 112.92 16 103.501C15 98.5012 18 94.0012 23.5 95.5012C30.7128 97.4683 36 112.501 36 112.501C36 112.501 37 56.5011 37 50.0012C37 46.4999 49.5 46.9997 49.5 50.0012C49.5 58.4997 49.5 82.5012 49.5 82.5012M49.5 102.501V82.5012M49.5 82.5012C49.5 82.5012 62 81.9999 62 84.5012C62 89.9999 62 102.501 62 102.501C62 102.501 62.5 90.9986 63 85.4999C63.2274 82.9986 73.3947 83.4999 73.5 85.4999C73.6053 87.4999 74.1095 96.0812 74.5 103.501C74.5 103.501 75.5 93.4987 76 90C76.5718 85.9987 87 87.9988 87 90.5C87 95.9988 88 124.001 88 124.001" stroke="#93ACFC" strokeWidth="5"/>
								</svg>
							</span>
							<span className="text">Нажмите, чтобы начать</span>
						</button>
					</div>
				)}

				{showSelectGen && (
					<div className={`block_select_gen ${selectGenActive ? '_active' : '_hidden'}`}>
						<button onClick={handleGeneSelect}>
							<picture style={{ position: "absolute", width: "100%", height: "100%"}}>
								<source srcSet={imgGen1.src} type="image/webp" />
								<source srcSet={imgGen1.src} type="image/jpeg" />
								<Image 
									src={imgGen1} 
									alt="" 
									fill
									unoptimized={true}
									objectFit='cover'
								/>
							</picture>
						</button>

						<button onClick={handleGeneSelect}>
							<picture style={{ position: "absolute", width: "100%", height: "100%"}}>
								<source srcSet={imgGen2.src} type="image/webp" />
								<source srcSet={imgGen2.src} type="image/jpeg" />
								<Image 
									src={imgGen2} 
									alt="" 
									fill
									unoptimized={true}
									objectFit='cover'
								/>
							</picture>
						</button>
					</div>
				)}
			</div>

			{showNewBlock && (
				<div className={`block_open_level ${newBlockHidden ? '_hidden' : ''}`}>
					<div className="bg_rnk">
						<picture style={{ position: "absolute", width: "100%", height: "100%"}}>
							<source srcSet={imgRnk.src} type="image/webp" />
							<source srcSet={imgRnk.src} type="image/jpeg" />
							<Image 
								src={imgRnk} 
								alt="" 
								fill
								unoptimized={true}
								objectFit='cover'
							/>
						</picture>
					</div>

					<div className="window_open_level">
						<p><span>Уровень 1</span></p>
						<h1>Создание ркн</h1>
					</div>
				</div>
			)}
		</div>
	);
}