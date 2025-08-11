"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

import "./section_info.css";
import "./section_info_media.css";



export default function Home() {
	const [activeTab, setActiveTab] = useState("bioeconomics");

	const tabs = [
		{ id: "bioeconomics", label: "Про биоэкономику" },
		{ id: "team", label: "Команда" },
		{ id: "project", label: "Федеральный проект ПИШ" }
	];

	const content = {
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
						отраслей для устойчивого развития и минимизации воздействия на окружающую среду. Важнейшими направлениями 
						биоэкономики являются создание новых продуктов питания, разработка биопластиков, создание биотоплива, 
						производство органических удобрений и биофармацевтики.
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
					<div className="tr">
						<div className="td">
						
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
							образования и обеспечивают технологическое лидерство страны по поручению и при 
							поддержке <span>Президента РФ</span>.
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


	
	return (
		<section className="info">
			<div className="block_controls">
				{tabs.map(tab => (
					<button 
						key={tab.id}
						className={activeTab === tab.id ? "_active" : ""}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className="section_content">
				{content[activeTab] || <div>Контент для вкладки "{activeTab}" в разработке</div>}
			</div>

			<div className="patterns">
				<img src="/img/main/info/pattern_1.png" alt="pattern on the background" />
				{/* <div className="pattern">
					<Image src="/img/main/info/pattern_1.png" alt="pattern on the background" fill />
				</div> */}
			</div>
		</section>
	);
}