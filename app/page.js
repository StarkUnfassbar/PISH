"use client";

import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from "next/image";

import "./page.css";
import "./page_media.css";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import StandardButton from './components/main_page/standard_button/StandardButton';
import SectionInfo from './components/main_page/section_info/SectionInfo';
import PopupHero from './components/main_page/popup_hero/PopupHero';



export default function Home() {
	const [popupHeroShow, setPopupHeroShow] = useState(false);
	const [popupHeroOpen, setPopupHeroOpen] = useState(false);
	const [popupIdHero, setPopupIdHero] = useState(1);

	const handlePopupOpen = (open, id) => {
		if(open){
			setPopupHeroShow(true);
			setPopupIdHero(id);

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
				<section className="home">
					<div className="section_content">
						<div className="text_heading">
							<span>Фестиваль</span>
							<span>биотехнологических</span>
							<span>профессий</span>
						</div>

						<p className="text_subheading">Наука рядом с тобой</p>

						<StandardButton text="Посетить онлайн" type="standard" />
					</div>

					<div className="patterns">
						<div className="pattern">
							<img src="/img/main/home/pattern_1.png" alt="pattern on the background" />
							{/* <Image src="/img/main/home/pattern_1.png" alt="pattern on the background" fill /> */}
						</div>

						<div className="pattern">
							<Image src="/img/main/home/pattern_2.png" alt="pattern on the background" fill unoptimized={true} />
						</div>

						<div className="pattern">
							<Image src="/img/main/home/pattern_3.png" alt="pattern on the background" fill unoptimized={true} />
						</div>

						<div className="pattern">
							<Image src="/img/main/home/pattern_4.png" alt="pattern on the background" fill unoptimized={true} />
						</div>

						{/* <div className="pattern"></div> */}
					</div>
				</section>

				<section className="about_museum">
					<h1><span>О музее</span></h1>

					<div className="section_content">
						<div className="upper_part">
							<div className="block_imgs">
								<img src="/img/main/about_museum/pattern_1.png" alt="" />
								<img src="/img/main/about_museum/pattern_2.png" alt="" />
							</div>

							<div className="block_info">
								<div className="text_container">
									<h3>будущее рядом</h3>

									<p>
										Сегодня биотехнологии применяются в самых разных отраслях — фармакологии, экологии, 
										металлодобывающей промышленности, производстве продуктов питания и других. 
									</p>
								</div>
							</div>
						</div>

						<div className="lower_part">
							<p>
								Как приготовить котлету, из-за которой ни одна корова не пострадала, что такое 
								FoodNet, как разрабатываются вакцины, новые биодобавки, 
								как спасти планету от загрязнения, очистить море 
								от пластика и как новые технологии изменят нашу жизнь – в музее биотеха. 
							</p>

							<div className="block_img">
								<img src="/img/main/about_museum/pattern_3.png" alt="" />
							</div>
						</div>

						<StandardButton text="Посетить онлайн" type="standard" />
					</div>

					<div className="patterns">
						{/* <div className="pattern">
							<Image src="/img/main/about_museum/pattern_1.png" alt="pattern on the background" fill />
						</div>

						<div className="pattern">
							<Image src="/img/main/about_museum/pattern_2.png" alt="pattern on the background" fill />
						</div>

						<div className="pattern">
							<Image src="/img/main/about_museum/pattern_3.png" alt="pattern on the background" fill />
						</div> */}

						<div className="pattern">
							<Image src="/img/main/about_museum/pattern_4.png" alt="pattern on the background" fill unoptimized={true} />
						</div>
					</div>
				</section>

				<section className="heroes_pish">
					<h1><span>Биоинженеры дальнего</span></h1>

					<div className="section_content">
						<div className="upper_part">
							<div className="block_hero">
								<div className="block_info">
									<Image src="/img/main/heroes_pish/photo.png" alt="" fill unoptimized={true} />

									<div className="text_info">
										<span className="fio">Сидоренко Андрей Владимирович</span>
										<span className="description">Главный механик производства “Кормбиосинтез”.</span>
									</div>
								</div>

								<StandardButton text="Узнать больше" type="learn_more" funForButton={() => handlePopupOpen(true, 1)} />
							</div>

							<div className="block_hero">
								<div className="block_info">
									<Image src="/img/main/heroes_pish/photo.png" alt="" fill unoptimized={true} />

									<div className="text_info">
										<span className="fio">Рочин Егор Олегович</span>
										<span className="description">
											Ведущий технолог НГПК “Арника”, специализирующейся на производстве биодобавок 
											для сельскохозяйственной отрасли.
										</span>
									</div>
								</div>

								<StandardButton text="Узнать больше" type="learn_more" funForButton={() => handlePopupOpen(true, 2)} />
							</div>
						</div>

						<div className="lower_part">
							<div className="block_hero">
								<StandardButton text="Узнать больше" type="learn_more" funForButton={() => handlePopupOpen(true, 3)} />

								<div className="block_info">
									<Image src="/img/main/heroes_pish/photo.png" alt="" fill unoptimized={true} />

									<div className="text_info">
										<span className="fio">Власова Ванесса</span>

										<span className="description">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
											labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="patterns">
						<div className="pattern">
							<Image src="/img/main/heroes_pish/pattern_1.png" alt="pattern on the background" fill unoptimized={true} />
						</div>
					</div>
				</section>

				<section className="about_pish">
					<div className="section_content">
						<h1>Передовая инженерная школа</h1>
						<h3>«Институт биотехнологий, биоинженерии и пищевых систем»</h3>

						<div className="mission">
							<h2>Наша миссия</h2>

							<p>
								Развитие отрасли «Биоэкономика» и популяризация биотехнологий на Дальнем Востоке в связке с ведущими 
								научно-образовательными центрами и компаниями в АТР для достижения продовольственной безопасности России.
							</p>
						</div>

						<StandardButton text="Поступить" type="standard" />
					</div>

					<div className="patterns">
						<div className="pattern">
							<Image src="/img/main/about_pish/pattern_1.png" alt="pattern on the background" fill unoptimized={true} />
						</div>

						<div className="pattern">
							<Image src="/img/main/about_pish/pattern_2.svg" alt="pattern on the background" fill />
						</div>
						
						<div className="pattern">
							<Image src="/img/main/about_pish/pattern_3.svg" alt="pattern on the background" fill />
						</div>
					</div>
				</section>

				<SectionInfo />
			</main>

			<Footer patternsActive={true} />


			{popupHeroShow && <PopupHero popupHeroOpen={popupHeroOpen} popupIdHero={popupIdHero} funForClose={() => handlePopupOpen(false)} />}
		</div>
	);
}