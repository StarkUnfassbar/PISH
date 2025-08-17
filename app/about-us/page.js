"use client";

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import "./page.css";
import "./page_media.css";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import SectionInfoMusei from '../components/about_us/section_info_musei/SectionInfoMusei';



export default function AboutUs() {
	const [isMobile, setIsMobile] = useState(null);
	
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1100);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);



	if (isMobile === null) {
		return null;
	}

	return (
		<div className="app">
			<div className="app_bg">
				<img src="/img/about_us/bg.png" alt="" />
			</div>

			<Header isMobile={isMobile} />

			<main>
				<SectionInfoMusei isMobile={isMobile} />

				<section className="advantages">
					<h2>Чем мы выделяемся?</h2>

					<div className="advantages_container">
						<div className="advantage">
							<div className="advantage_bg">
								<img src="/img/about_us/advantages/frame_1.svg" alt="" />
							</div>

							<div className="advantage_content">
								<div className="block_number">
									<span>1</span>
								</div>

								<div className="block_text">
									<p>
										<span>Единственный на Дальнем Востоке:</span> Музей является уникальной площадкой для всего региона.
									</p>
								</div>
							</div>
						</div>

						<div className="advantage">
							<div className="advantage_bg">
								<img src="/img/about_us/advantages/frame_2.svg" alt="" />
							</div>

							<div className="advantage_content">
								<div className="block_number">
									<span>2</span>
								</div>

								<div className="block_text">
									<p>
										<span>Региональная специфика:</span> Экспозиция ориентирована на демонстрацию возможностей 
										реализации биотехнологических проектов с учетом особенностей ресурсной базы Приморского края, 
										что представляет ценность как для студентов, так и для широкого научного сообщества.
									</p>
								</div>
							</div>
						</div>

						<div className="advantage">
							<div className="advantage_bg">
								<img src="/img/about_us/advantages/frame_3.svg" alt="" />
							</div>

							<div className="advantage_content">
								<div className="block_number">
									<span>3</span>
								</div>

								<div className="block_text">
									<p>
										<span>Доступность и наглядность:</span> Экспонаты в доступной и увлекательной форме 
										демонстрируют преимущества новейших биотехнологических разработок, включая процессы создания 
										вакцин, биодобавок и других инновационных технологий, ставших частью повседневной жизни. 
										Посетители смогут ознакомиться с образцами пищевой продукции, произведенной из нетрадиционного сырья.
									</p>
								</div>
							</div>
						</div>

						<div className="advantage">
							<div className="advantage_bg">
								<img src="/img/about_us/advantages/frame_4.svg" alt="" />
							</div>

							<div className="advantage_content">
								<div className="block_number">
									<span>4</span>
									<span>4</span> 
								</div>

								<div className="block_text">
									<p>
										<span>Уникальные экспонаты:</span> Особое место занимают две инсталляции, отражающие 
										потенциал Дальнего Востока:
									</p>

									<ul>
										<li>
											<p>
												<span>«Аквабио:</span> живые системы водной среды»: Демонстрирует использование аквабиоресурсов 
												региона в качестве источника сырья для биотехнологической отрасли.
											</p>
										</li>

										<li>
											<p>
												<span>«Бактерии на страже экологии»:</span> Представляет инновационные биотехнологические методы 
												очистки акватории, в частности, пролива Босфор Восточный, с применением специализированных 
												бактериальных культур.
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer patternsActive={true} />
		</div>
	);
}