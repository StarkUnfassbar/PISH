"use client";

import { useState, useEffect } from 'react';

import './exhibit_in_dev.css';
import './exhibit_in_dev_media.css';



export default function ExhibitInDev({ funForCloseWidget }) {
	return (
		<div className="block_warning">
			<div className="content">
				<h1>Данный экспонат находится в разработке</h1>
				<p>Пожалуйста, зайди к нам позже или попробуйте другой экспонат</p>

				<span className="button_exit" onClick={() => funForCloseWidget(false, "")}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 73" fill="none">
						<line x1="4.06066" y1="1.93934" x2="74.0607" y2="71.9393" stroke="white" strokeWidth="3"/>
						<line x1="1.93934" y1="71.9393" x2="71.9393" y2="1.93934" stroke="white" strokeWidth="3"/>
					</svg>
				</span>
			</div>
		</div>
	);
}