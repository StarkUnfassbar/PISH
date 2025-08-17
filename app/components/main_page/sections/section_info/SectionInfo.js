"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/css';

import "./section_info.css";
import "./section_info_media.css";



export default function SectionInfo({ isMobile }) {
	const [activeTab, setActiveTab] = useState("bioeconomics");
	const swiperRef = useRef(null);

	const tabs = [
		{ id: "bioeconomics", label: "Про биоэкономику" },
		{ id: "team", label: "Команда" },
		{ id: "project", label: "Федеральный проект ПИШ" }
	];

	const slides = {
		bioeconomics: (
			<div className="bioeconomics">
				<div className="bg"></div>

				<div className="block_text">
					<p>
						<span>Биоэкономика</span> — это экономика, основанная на использовании возобновляемых биологических ресурсов 
						для производства продуктов, энергии и услуг.
					</p>
					<p>
						Она объединяет достижения биотехнологий, сельского хозяйства, лесного хозяйства, рыболовства и других 
						отраслей для устойчивого развития и минимизации воздействия на окружающую среду.
					</p>
				</div>
			</div>
		),
		team: (
			<div className="team">
				<div className="block_text">
					<p>
						Мы - команда Биоинженеры Дальнего, занимаемся комплексным развитием биоэкономики на Дальнем Востоке
					</p>
				</div>

				<div className="table">
					<div className="bg"></div>

					<div className="table_content">
						<div className="column">
							<div className="column_head">
								<h3>Создаём</h3>
								<h5>высокотехнологичный бизнес</h5>
							</div>

							<div className="column_content">
								<h4>Наша команда уже создала несколько передовых компаний на Дальнем Востоке:</h4>

								<p><span>Арника</span> (единственный российский производитель нескольких кормовых добавок)</p>
								<p><span>ДВ-Эксперт</span> (осуществляет экспертизу биопродукции для всех компаний отрасли на Дальнем Востоке)</p>
								<p><span>Биопродукт</span> (кормит жителей Владивостока и кампуса ДВФУ полезной пищей)</p>
								<p><span>Иннофарм-ДВ</span> (создаёт автоматизированные комплексы для сити-фермерства)</p>
								<p><span>И создаем</span> новые компании в биотехе вместе со стартап-студией ДВФУ.</p>
							</div>
						</div>

						<div className="column">
							<div className="column_head">
								<h3>Развиваем</h3>
								<h5>биотехнологическую науку</h5>
							</div>

							<div className="column_content">
								<h4>Ведем несколько прорывных проектов с институтами ДВО РАН</h4>

								<ul>
									<li>неопиоидный анальгетик</li>
									<li>БАД Астэихин</li>
									<li>съедобную вакцину для</li>
									<li>животных от чумы свиней</li>
								</ul>

								<p><span>Берём</span> научное руководство над аспирантами.</p>
							</div>
						</div>

						<div className="column">
							<div className="column_head">
								<h3>Готовим</h3>
								<h5>кадры для отрасли</h5>
							</div>

							<div className="column_content">
								<p>
									Создали Передовую инженерную школу в ДВФУ, чтобы обеспечить кадрами текущие и будущие 
									компании отрасли.
								</p>

								<p>
									Уже сейчас вовлекаем студентов в решение задач, которые стоят перед развитием биоэкономики на 
									Дальнем Востоке вместе с индустрией и учёными.
								</p>
							</div>
						</div>

						<div className="column">
							<div className="column_head">
								<h3>Популяризируем</h3>
								<h5>биотех</h5>
							</div>

							<div className="column_content">
								<p>
									Проводим проектные школы и олимпиады, научные стенд-апы и биотехнологические фестивали, экскурсии 
									на высокотехнологичные предприятия, а также создали Музей современных биотехнологий во 
									Владивостоке, чтобы большее число талантливых людей захотели связать свою карьеру с <span>биоэкономикой</span>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		),
		project: (
			<div className="project">
				<div className="upper_part">
					<div className="block_text">
						<div className="bg"></div>
						<p>
							Передовая инженерная школа ДВФУ входит в <span className="_enlarged">50</span> передовых инженерных 
							школ РФ которые в тесной кооперации с индустрией создают новое качество инженерного 
							образования.
						</p>
					</div>
				</div>

				<div className="lower_part">
					<div className="block_text">
						<div className="bg"></div>
						<p>
							Школа является первой на Дальнем Востоке и одной из трёх в России по биотехнологической специализации, 
							получивших статус Передовых инженерных школ федерального значения. Подробнее о федеральном проекте:
							<Link href="https://engineers2030.ru/" target="_blank">https://engineers2030.ru/</Link>
						</p>
					</div>
				</div>
			</div>
		)
	};

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);

		if (swiperRef.current) {
			const tabIndex = tabs.findIndex(tab => tab.id === tabId);
			swiperRef.current.swiper.slideTo(tabIndex);
		}
	};

	const handleSlideChange = (swiper) => {
		const activeIndex = swiper.activeIndex;
		setActiveTab(tabs[activeIndex].id);
	};


	
	if(isMobile){
		return null;
	}

	return (
		<section className="info">
			<div className="block_controls">
				{tabs.map(tab => (
					<button 
						key={tab.id}
						className={activeTab === tab.id ? "_active" : ""}
						onClick={() => handleTabClick(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className="section_content">
				<Swiper
					ref={swiperRef}
					onSlideChange={handleSlideChange}
					allowTouchMove={false}
					autoHeight={true}
				>
					{tabs.map(tab => (
						<SwiperSlide key={tab.id}>
							<div className="swiper_content">
								{slides[tab.id]}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="patterns">
				<img src="/img/main/info/pattern_1.png" alt="pattern on the background" />
			</div>
		</section>
	);
}