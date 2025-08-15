"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

import './popup_about_blocked.css';



export default function PopupAboutBlocked({ popupHeroOpen, funForClose }) {
	return (
		<div className={`popup ${popupHeroOpen ? "" : "_hidden"}`}>
			<div className="popup_blackout" onClick={funForClose}></div>

			<div className="popup_content">
				{/* <Image src="/img/main/popup_hero/bg.png" alt="" fill unoptimized={true} /> */}

				<div className="block_content">
					<div className="block_text">
						<h1>УПС!</h1>
						<p>Для просмотра остальных видеоуроков необходима регестрация</p>
					</div>

					<button className="button_registration">Зарегестрироваться</button>
				</div>

				<button className="button_exit" onClick={funForClose}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 73" fill="none">
						<line x1="4.06066" y1="1.93934" x2="74.0607" y2="71.9393" />
						<line x1="1.93934" y1="71.9393" x2="71.9393" y2="1.93934" />
					</svg>
				</button>
			</div>
		</div>
	);
}