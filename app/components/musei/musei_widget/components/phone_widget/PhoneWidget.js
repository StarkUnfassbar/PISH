'use client';

import { useState, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import './phone_widget.css';
import './phone_widget_media.css';

import slide1 from './img/slide1.png';

import ExhibitInDev from '../exhibit_in_dev/ExhibitInDev';



export default function PhoneWidget() {
	const swiperRef = useRef(null);

	const [exhibitInDevOpen, setExhibitInDevOpen] = useState(false);

	const handleExhibitInDevOpen = (exhibitInDev) => {
		console.log(1)
		if(exhibitInDev){
			setExhibitInDevOpen(true);
		} else{
			setExhibitInDevOpen(false);
		}
	};

	return (
		<div className="block_phone">
			<div className="block_swiper">
				<Swiper
					modules={[Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
					<SwiperSlide>
						<img src={slide1.src} alt="Slide 1" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide1.src} alt="Slide 2" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={slide1.src} alt="Slide 3" />
					</SwiperSlide>
				</Swiper>
			</div>


			<div className="block_exhibits">
				<div className="block_exhibit">
					<button onClick={() => handleExhibitInDevOpen(true)}></button>
				</div>
			</div>

			<div className="block_tip">
				<p>Добро пожаловать в музей Передовой Инженерной школы ДВФУ!</p>
				<p>Для того чтобы начать, выберите экспонат и нажмите на него</p>
			</div>

			<div className="block_controls">
				<button onClick={() => swiperRef.current?.slidePrev()}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 24" fill="none">
						<path d="M12.5 23L2 12.5L12.5 1" stroke="white" strokeWidth="2"/>
					</svg>
				</button>

				<button onClick={() => swiperRef.current?.slideNext()}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 24" fill="none">
						<path d="M1 1L11.5 11.5L1 23" stroke="white" strokeWidth="2"/>
					</svg>
				</button>
			</div>


			<ExhibitInDev exhibitInDevOpen={exhibitInDevOpen} handleExhibitInDevOpen={handleExhibitInDevOpen} />
		</div>
	);
}