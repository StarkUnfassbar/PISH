import Link from 'next/link';
import Image from "next/image";

import "./page.css";
import "./page_media.css";

import StandardButton from './components/main_page/standard_button/StandardButton';
import SectionInfo from './components/main_page/section_info/SectionInfo';



export default function Home() {
	return (
		<div className="app">
			<header>
				<div className="header_content">
					<div className="basic_logo">
						<Link href="/" className="logo">
							<Image src="/img/main/logo/logo_pish.svg" alt="logo of the advanced engineering school" fill />
						</Link>

						<Link href="https://www.dvfu.ru/" className="logo">
							<Image src="/img/main/logo/logo_fefu.svg" alt="logo of the Far Eastern Federal University" fill />
						</Link>
					</div>

					<nav>
						<Link href="/" className="logo_home">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 30" fill="none">
								<path d="M0.666748 26.6666V11.6666C0.666748 11.1388 0.785081 10.6388 1.02175 10.1666C1.25841 9.69436 1.58453 9.30547 2.00008 8.99992L12.0001 1.49992C12.5834 1.05547 13.2501 0.833252 14.0001 0.833252C14.7501 0.833252 15.4167 1.05547 16.0001 1.49992L26.0001 8.99992C26.4167 9.30547 26.7434 9.69436 26.9801 10.1666C27.2167 10.6388 27.3345 11.1388 27.3334 11.6666V26.6666C27.3334 27.5833 27.0068 28.3683 26.3534 29.0216C25.7001 29.6749 24.9156 30.001 24.0001 29.9999H19.0001C18.5279 29.9999 18.1323 29.8399 17.8134 29.5199C17.4945 29.1999 17.3345 28.8044 17.3334 28.3333V19.9999C17.3334 19.5277 17.1734 19.1321 16.8534 18.8133C16.5334 18.4944 16.1379 18.3344 15.6667 18.3333H12.3334C11.8612 18.3333 11.4656 18.4933 11.1467 18.8133C10.8279 19.1333 10.6679 19.5288 10.6667 19.9999V28.3333C10.6667 28.8055 10.5067 29.2016 10.1867 29.5216C9.86675 29.8416 9.47119 30.001 9.00008 29.9999H4.00008C3.08341 29.9999 2.29897 29.6738 1.64675 29.0216C0.994526 28.3694 0.667859 27.5844 0.666748 26.6666Z" />
							</svg>
						</Link>

						<div className="links">
							<Link href="" className="nav_link">о нас</Link>
							<Link href="/musei" className="nav_link">интерактивный музей</Link>
							<Link href="" className="nav_link">видеоуроки</Link>

							<Link href="" className="nav_link">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 16" fill="none">
									<path d="M0.536 3.424H13.432V10.944H12.2V4.592H1.736V11.024H0.536V3.424ZM1.176 8.848H12.92V10.032H1.176V8.848ZM6.328 0.559999H7.592V15.264H6.328V0.559999ZM26.424 3.872L27.688 4.256C27.016 6.208 26.152 7.89333 25.096 9.312C24.0507 10.7307 22.792 11.9253 21.32 12.896C19.8587 13.8667 18.1573 14.6667 16.216 15.296C16.1733 15.1893 16.104 15.0667 16.008 14.928C15.9227 14.7893 15.8267 14.6453 15.72 14.496C15.624 14.3467 15.5333 14.2293 15.448 14.144C17.3467 13.5893 19.0053 12.864 20.424 11.968C21.8427 11.0613 23.048 9.94667 24.04 8.624C25.032 7.29067 25.8267 5.70667 26.424 3.872ZM19.144 3.968C19.7307 5.67467 20.52 7.21067 21.512 8.576C22.5147 9.93067 23.7413 11.0773 25.192 12.016C26.6427 12.9547 28.3333 13.6533 30.264 14.112C30.168 14.1973 30.0613 14.3093 29.944 14.448C29.8373 14.5973 29.7307 14.7467 29.624 14.896C29.528 15.0453 29.448 15.1733 29.384 15.28C27.4107 14.768 25.688 14.0107 24.216 13.008C22.7547 11.9947 21.512 10.7627 20.488 9.312C19.464 7.85067 18.6213 6.18667 17.96 4.32L19.144 3.968ZM15.624 3.28H30.088V4.448H15.624V3.28ZM22.184 0.559999H23.416V3.984H22.184V0.559999Z" fill="white"/>
								</svg>
							</Link>
						</div>

						<Link href="" className="old_version">версия 2024</Link>
					</nav>

					<div className="additional_info">
						<Link href="https://наука.рф/" className="logo_partner">
							<Image src="/img/main/logo/logo_science_technology.svg" alt="The Decade of Science and Technology logo" fill />
						</Link>

						<Link href="https://minobrnauki.gov.ru/" className="logo_partner">
							<Image src="/img/main/logo/logo_ministry.svg" alt="logo of the Ministry of Education and Science of the Russian Federation" fill />
						</Link>
					</div>
				</div>
			</header>
			
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
							<img src="/img/main/home/pattern_1.png" alt="" />
							{/* <Image src="/img/main/home/pattern_1.png" alt="pattern on the background" fill /> */}
						</div>

						<div className="pattern">
							<Image src="public/img/main/home/pattern_2.png" alt="pattern on the background" fill />
						</div>

						<div className="pattern">
							<Image src="public/img/main/home/pattern_3.png" alt="pattern on the background" fill />
						</div>

						<div className="pattern">
							<Image src="public/img/main/home/pattern_4.png" alt="pattern on the background" fill />
						</div>
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
										Сегодня биотехнологии применяются 
										в самых разных отраслях — фармакологии, экологии, металлодобывающей промышленности, производстве 
										продуктов питания и тд.
									</p>
								</div>
							</div>
						</div>

						<div className="lower_part">
							<p>
								Как приготовить котлету, из-за которой ни одна корова не пострадала, 
								что такое FoodNet», как разрабатываются вакцины, новые биодобавки, 
								как спасти планету от загрязнения, очистить море от пластика и как 
								новые технологии изменят нашу жизнь – в спецпроекте DEITA.RU.
							</p>

							<img src="/img/main/about_museum/pattern_3.png" alt="" />
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
							<Image src="/img/main/about_museum/pattern_4.png" alt="pattern on the background" fill />
						</div>
					</div>
				</section>

				<section className="heroes_pish">
					<h1><span>Биоинженеры дальнего</span></h1>

					<div className="section_content">
						<div className="upper_part">
							<div className="block_hero">
								<div className="block_info">
									<Image src="/img/main/heroes_pish/photo.png" alt="" fill />

									<div className="text_info">
										<span className="fio">Сидоренко Андрей Владимирович</span>
										<span className="description">Главный механик производства “Кормбиосинтез”.</span>
									</div>
								</div>

								<StandardButton text="Узнать больше" type="learn_more" />
							</div>

							<div className="block_hero">
								<div className="block_info">
									<Image src="/img/main/heroes_pish/photo.png" alt="" fill />

									<div className="text_info">
										<span className="fio">Рочин Егор Олегович</span>
										<span className="description">
											Ведущий технолог НГПК “Арника”, специализирующейся на производстве биодобавок 
											для сельскохозяйственной отрасли.
										</span>
									</div>
								</div>

								<StandardButton text="Узнать больше" type="learn_more" />
							</div>
						</div>

						<div className="lower_part">
							<div className="block_hero">
								<StandardButton text="Узнать больше" type="learn_more" />

								<div className="block_info">
									<Image src="/img/main/heroes_pish/photo.png" alt="" fill />

									<div className="text_info">
										<span className="fio">Власова ванесса</span>

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
							<Image src="/img/main/heroes_pish/pattern_1.png" alt="pattern on the background" fill />
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
							<Image src="public/img/main/about_pish/pattern_1.png" alt="pattern on the background" fill />
						</div>

						<div className="pattern">
							<Image src="public/img/main/about_pish/pattern_2.svg" alt="pattern on the background" fill />
						</div>
						
						<div className="pattern">
							<Image src="public/img/main/about_pish/pattern_3.svg" alt="pattern on the background" fill />
						</div>
					</div>
				</section>

				<SectionInfo />
			</main>

			<footer>
				<div className="footer_content">
					<div className="upper_part">
						<div className="left">
							<Link href="/" className="logo">
								<Image src="/img/main/logo/logo_pish.svg" alt="logo of the advanced engineering school" fill />
							</Link>
						</div>

						<div className="right">
							<Link href="https://minobrnauki.gov.ru/" className="logo_partner">
								<Image src="/img/main/logo/logo_ministry.svg" alt="logo of the Ministry of Education and Science of the Russian Federation" fill />
							</Link>

							<Link href="https://www.dvfu.ru/" className="logo_partner">
								<Image src="/img/main/logo/logo_fefu.svg" alt="logo of the Far Eastern Federal University" fill />
							</Link>
						</div>
					</div>

					<div className="lower_part">
						<div className="block_contact">
							<h5>Адрес</h5>

							<p>О. Русский, посёлок Аякс, 10 к. G</p>
							<p>ПН-ПТ: 09:00-18:00</p>
							<p>8 (423) 265-24-24 (вн. 2959)</p>

							<div className="social_networks">
								<Link href="/">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 38" fill="none">
										<path d="M19.5 0C8.736 0 0 8.512 0 19C0 29.488 8.736 38 19.5 38C30.264 38 39 29.488 39 19C39 8.512 30.264 0 19.5 0ZM28.548 12.92C28.2555 15.922 26.988 23.218 26.3445 26.581C26.0715 28.006 25.5255 28.481 25.0185 28.538C23.8875 28.633 23.0295 27.816 21.9375 27.113C20.2215 26.011 19.2465 25.327 17.589 24.263C15.6585 23.028 16.9065 22.344 18.018 21.242C18.3105 20.957 23.3025 16.53 23.4 16.131C23.4135 16.0706 23.4117 16.0078 23.3948 15.9482C23.3778 15.8886 23.3461 15.834 23.3025 15.789C23.1855 15.694 23.0295 15.732 22.893 15.751C22.7175 15.789 19.9875 17.556 14.664 21.052C13.884 21.565 13.182 21.831 12.558 21.812C11.856 21.793 10.53 21.432 9.5355 21.109C8.307 20.729 7.3515 20.52 7.4295 19.855C7.4685 19.513 7.956 19.171 8.8725 18.81C14.5665 16.397 18.3495 14.801 20.241 14.041C25.662 11.837 26.7735 11.457 27.5145 11.457C27.6705 11.457 28.041 11.495 28.275 11.685C28.47 11.837 28.5285 12.046 28.548 12.198C28.5285 12.312 28.5675 12.654 28.548 12.92Z" fill="url(#paint0_linear_416_97)"/>
										<defs>
											<linearGradient id="paint0_linear_416_97" x1="39.39" y1="19.0004" x2="-0.389975" y2="19.0004" gradientUnits="userSpaceOnUse">
												<stop stopColor="#8A38F5"/>
												<stop offset="1" stopColor="#4547BB"/>
											</linearGradient>
										</defs>
									</svg>
								</Link>

								<Link href="/">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
										<path d="M19.9998 0.799805C9.39581 0.799805 0.799805 9.39581 0.799805 19.9998C0.799805 30.6038 9.39581 39.1998 19.9998 39.1998C30.6038 39.1998 39.1998 30.6038 39.1998 19.9998C39.1998 9.39581 30.6038 0.799805 19.9998 0.799805ZM27.3838 22.4618C27.3838 22.4618 29.0818 24.1378 29.4998 24.9158C29.5118 24.9331 29.5191 24.9465 29.5218 24.9558C29.6911 25.2398 29.7331 25.4645 29.6478 25.6298C29.5078 25.9058 29.0278 26.0418 28.8638 26.0538H25.8638C25.6558 26.0538 25.2198 25.9998 24.6918 25.6358C24.2858 25.3518 23.8858 24.8858 23.4958 24.4318C22.9138 23.7558 22.4098 23.1718 21.9018 23.1718C21.8373 23.1715 21.7731 23.1817 21.7118 23.2018C21.3278 23.3258 20.8358 23.8738 20.8358 25.3338C20.8358 25.7898 20.4758 26.0518 20.2218 26.0518H18.8478C18.3798 26.0518 15.9418 25.8878 13.7818 23.6098C11.1378 20.8198 8.7578 15.2238 8.7378 15.1718C8.5878 14.8098 8.8978 14.6158 9.2358 14.6158H12.2658C12.6698 14.6158 12.8018 14.8618 12.8938 15.0798C13.0018 15.3338 13.3978 16.3438 14.0478 17.4798C15.1018 19.3318 15.7478 20.0838 16.2658 20.0838C16.3629 20.0827 16.4583 20.058 16.5438 20.0118C17.2198 19.6358 17.0938 17.2258 17.0638 16.7258C17.0638 16.6318 17.0618 15.6478 16.7158 15.1758C16.4678 14.8338 16.0458 14.7038 15.7898 14.6558C15.8934 14.5128 16.0299 14.3969 16.1878 14.3178C16.6518 14.0858 17.4878 14.0518 18.3178 14.0518H18.7798C19.6798 14.0638 19.9118 14.1218 20.2378 14.2038C20.8978 14.3618 20.9118 14.7878 20.8538 16.2458C20.8358 16.6598 20.8178 17.1278 20.8178 17.6798L20.8118 18.0638C20.7918 18.8058 20.7678 19.6478 21.2918 19.9938C21.3594 20.0384 21.4389 20.0614 21.5198 20.0598C21.7018 20.0598 22.2498 20.0598 23.7338 17.5138C24.1898 16.6934 24.5874 15.842 24.9238 14.9658C24.9538 14.9138 25.0418 14.7538 25.1458 14.6918C25.2234 14.6549 25.3079 14.6352 25.3938 14.6338H28.9558C29.3438 14.6338 29.6098 14.6918 29.6598 14.8418C29.7478 15.0798 29.6438 15.8058 28.0178 18.0078L27.2918 18.9658C25.8178 20.8978 25.8178 20.9958 27.3838 22.4618Z" fill="url(#paint0_linear_416_99)"/>
										<defs>
											<linearGradient id="paint0_linear_416_99" x1="39.1996" y1="20" x2="-1.00018" y2="20" gradientUnits="userSpaceOnUse">
												<stop stopColor="#8A38F5"/>
												<stop offset="1" stopColor="#4547BB"/>
											</linearGradient>
										</defs>
									</svg>
								</Link>
							</div>
						</div>

						<nav>
							<h5>Меню</h5>

							<Link href="/">Интерактивный музей</Link>
							<Link href="/">О нас</Link>
							<Link href="/">Видеоуроки</Link>
							<Link href="/">Иностранным партнёрам</Link>
						</nav>

						<nav>
							<h5>Передовая инженерная школа</h5>

							<Link href="/">Приёмная комиссия</Link>
							<Link href="/">Поступить</Link>
						</nav>
					</div>
				</div>

				<div className="patterns">
					<img src="/img/main/footer/pattern_1.png" alt="pattern on the background" />

					{/* <div className="pattern">
						<Image src="/img/main/footer/pattern_1.png" alt="pattern on the background" fill />
					</div> */}
				</div>
			</footer>
		</div>
	);
}