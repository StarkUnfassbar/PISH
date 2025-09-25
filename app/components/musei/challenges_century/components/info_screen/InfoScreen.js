"use client";

import { useState, useRef } from 'react';
import './info_screen.css';



export default function InfoScreen({ isMobile, hiddenStatus, onCloseInfoScree }) {
	return (
		<div className={`info_window ${hiddenStatus ? "_hidden" : ''}`}>
			<div className="block_close" onClick={onCloseInfoScree}>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="176" height="26" viewBox="0 0 176 26" fill="none">
						<path d="M0 0H166C171.523 0 176 4.47715 176 10V16C176 21.5228 171.523 26 166 26H0V0Z" fill="url(#paint0_linear_247_33)"/>
						<circle cx="164" cy="13" r="9" fill="#727AFF"/>
						<defs>
							<linearGradient id="paint0_linear_247_33" x1="0" y1="13" x2="176" y2="13" gradientUnits="userSpaceOnUse">
								<stop offset="0.2" stopColor="#4E529E" stopOpacity="0.1"/>
								<stop offset="1" stopColor="#4E529E"/>
							</linearGradient>
						</defs>
					</svg>
				</span>

				<h4>Вернуться</h4>
			</div>

			<div className="block_info">
				<div className="block_info__container">
					<div className="block_general_info">
						<div className="population_earth">
							<h1>Население земли</h1>
							<h1 className="number">6,114 <span>млрд. чел</span></h1>
						</div>

						<div className="parameter">
							<p>0,43 <span>°C</span></p>
							<p className="description">Увеличение средней температуры</p>
						</div>

						<div className="parameter">
							<p>1,9 <span>млрд. тонн</span></p>
							<p className="description">Спрос на питание</p>
						</div>

						<div className="parameter">
							<p>3500 <span>км³</span></p>
							<p className="description">Спрос на воду</p>
						</div>
					</div>

					<div className="block_factors">
						<div className="block_factor">
							<div className="left_part">
								<h4>Экономические факторы</h4>

								<div className="block_progression">
									<h5>Уровень проникновения зеленых технологий в промышленность</h5>

									<div className="progression">
										<div className="progress_bar">
											<span className="progress_bar__bg"></span>
											<span className="progress_bar__completion" style={{ width: "0%" }}></span>
										</div>

										<p>0%</p>
									</div>
								</div>
							</div>

							<div className="right_part">
								<div className="block_statistics">
									<h5>22 <span>млрд. $</span></h5>

									<p>Объемы биоэкономики</p>
								</div>

								<div className="block_statistics">
									<h5>5 <span>млрд. $</span></h5>

									<p style={{ width: "200px" }}>Мировой объем эко- и биополимеров</p>
								</div>
							</div>
						</div>

						<div className="block_factor">
							<div className="left_part">
								<h4>Технологические факторы</h4>

								<div className="block_progression">
									<h5>Альтернативные продукты питания</h5>

									<div className="progression">
										<div className="progress_bar">
											<span className="progress_bar__bg"></span>
											<span className="progress_bar__completion" style={{ width: "0%" }}></span>
										</div>

										<p>0% <span>от мирового рынка</span></p>
									</div>
								</div>
							</div>

							<div className="right_part">
								<div className="block_statistics">
									<h5>0 <span>млрд. $</span></h5>

									<p>Объемы проникновения синтетической биологии в другие сферы</p>
								</div>

								<div className="block_statistics">
									<h5>0 <span>млрд. $</span></h5>

									<p>Проникновние технологий искусственного интеллекта</p>
								</div>
							</div>
						</div>

						<div className="block_factor">
							<div className="left_part">
								<h4>Социополитические факторы</h4>

								<div className="block_progression">
									<h5>Уровень проникновения зеленых технологий в быт</h5>

									<div className="progression">
										<div className="progress_bar">
											<span className="progress_bar__bg"></span>
											<span className="progress_bar__completion" style={{ width: "5%" }}></span>
										</div>

										<p>5%</p>
									</div>
								</div>
							</div>

							<div className="right_part">
								<div className="block_statistics">
									<h5>0,4 <span>°C</span></h5>

									<p>Мировые обязательства по борьбе с глобальным потеплением</p>
								</div>

								<div className="block_progression">
									<h5>Принятие обществом принципов экологической ответсвенности</h5>

									<div className="progression">
										<div className="progress_bar">
											<span className="progress_bar__bg"></span>
											<span className="progress_bar__completion" style={{ width: "5%" }}></span>
										</div>

										<p>5% <span>населения</span></p>
									</div>
								</div>
							</div>
						</div>

						<div className="block_factor">
							<div className="left_part">
								<h4>Экономические факторы</h4>

								<div className="block_progression">
									<h5>Вторичная переработка пластика</h5>

									<div className="progression">
										<div className="progress_bar">
											<span className="progress_bar__bg"></span>
											<span className="progress_bar__completion" style={{ width: "3%" }}></span>
										</div>

										<p>3%</p>
									</div>
								</div>
							</div>

							<div className="right_part">
								<div className="block_statistics">
									<h5 style={{ width: "100px" }}>0,15 <span>млрд. тонн</span></h5>

									<p>Объем мирового рынка управления отходами</p>
								</div>

								<div className="block_statistics">
									<h5 style={{ width: "100px" }}>250 <span>тыс. барр./день</span></h5>

									<p>Биотопливо</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="block_switches">
				<span>Выберите сценарий:</span>

				<div className="block_switch">
					<h2>01</h2>
					<h4>Консервативный</h4>

					<p>Общество, промышленность и сельское хозяйство существуют в привычном формате</p>
				</div>

				<div className="block_switch">
					<h2>02</h2>
					<h4>Проактивный</h4>

					<p>Каждый осуществит свой посильный вклад в экономику</p>
				</div>

				<div className="block_switch">
					<h2>03</h2>
					<h4>Футурологический</h4>

					<p>Если все технологии можно будет внедрить в жизнь</p>
				</div>
			</div>
		</div>
	);
}