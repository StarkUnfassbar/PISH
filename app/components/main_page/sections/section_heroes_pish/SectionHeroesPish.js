import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from "next/image";

import './section_heroes_pish.css';
import './section_heroes_pish_media.css';

import StandardButton from '../../standard_button/StandardButton';

import PopupHero from '../../popup_hero/PopupHero';



export default function SectionHeroesPish({ isMobile }) {
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
		<>
			{isMobile ? (
				<section className="heroes_pish mobile">
					<h1><span>Биоинженеры дальнего</span></h1>

					<div className="section_content">
						<div className="block_hero">
							<div className="block_info">
								<span className="fio">Сидоренко Андрей Владимирович</span>
								<span className="description">Главный механик производства “Кормбиосинтез”.</span>

								<StandardButton text="Узнать больше" type="learn_more" funForButton={() => handlePopupOpen(true, 1)} />
							</div>

							<div className="block_img"></div>
						</div>

						<div className="block_hero _reverse">
							<div className="block_img"></div>

							<div className="block_info">
								<span className="fio">Рочин Егор Олегович</span>
								<span className="description">
									Ведущий технолог НГПК <span>“Арника”</span>, специализирующейся на производстве биодобавок 
									для сельскохозяйственной отрасли.
								</span>

								<StandardButton text="Узнать больше" type="learn_more" funForButton={() => handlePopupOpen(true, 2)} />
							</div>
						</div>

						<div className="block_hero">
							<div className="block_info">
								<span className="fio">Власова Ванесса</span>
								<span className="description">Lorem ipsum</span>

								<StandardButton text="Узнать больше" type="learn_more" funForButton={() => handlePopupOpen(true, 3)} />
							</div>

							<div className="block_img"></div>
						</div>
					</div>

					{/* <div className="patterns">
						<div className="pattern">
							<Image src="/img/main/heroes_pish/pattern_1.png" alt="pattern on the background" fill unoptimized={true} />
						</div>
					</div> */}
				</section>
			) : (
				<section className="heroes_pish main">
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
			)}

			{popupHeroShow && <PopupHero isMobile={isMobile} popupHeroOpen={popupHeroOpen} popupIdHero={popupIdHero} funForClose={() => handlePopupOpen(false)} />}
		</>
	);
}