import Link from 'next/link';
import Image from 'next/image';

import "./page.css";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import StandardButton from '../components/main_page/standard_button/StandardButton';



export default function AboutUs() {
	return (
		<div className="app">
			<div className="app_bg">
				<img src="/img/about_us/bg.png" alt="" />
			</div>

			<Header />

			<main>
				<section className="info_musei">
					<h1>Добро пожаловать в будущее</h1>

					<div className="block_info_opening">
						<div className="content">
							<h4>18 октября 2024 года</h4>

							<div className="block_text">
								<p>
									В день Биотехнолога состоялось открытие <span>Музея современных биотехнологий</span> Передовой инженерной 
									школы ДВФУ. Инсталляции музея созданы совместно с ФИЦ биотехнологии РАН. Музей представляет 
									собой экспозиционное пространство биотехнологическихи биоинженерных инсталляционных моделей.
								</p>

								<p>
									<span>Предназначение музея</span> – популяризация биоинженерии среди молодежи Дальнего Востока и Сибири.
								</p>
							</div>
						</div>
					</div>

					<div className="block_facts">
						<div className="container">
							<div className="block_content">
								<div className="block_text">
									<p>
										Музей, созданный при научно-методическом участии Федерального исследовательского 
										центра <span>«Фундаментальные основы биотехнологии»</span> Российской академии наук (ФИЦ Биотехнологии РАН), 
										представляет собой уникальное экспозиционное пространство, демонстрирующее модели 
										биотехнологических и биоинженерных разработок.
									</p>

									<p>
										<span>Основная цель музея</span> – популяризация достижений биоинженерии и биотехнологий среди молодежи 
										Дальнего Востока и Сибири.
									</p>
								</div>
							</div>

							<div className="block_content">

							</div>
						</div>
					</div>

					<div className="block_button">
						<StandardButton text="Посетить" type="standard" />
					</div>
				</section>

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