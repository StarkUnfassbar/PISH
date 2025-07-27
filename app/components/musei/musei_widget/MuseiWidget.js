"use client";

import { useState, useEffect } from 'react';

import './musei_widget.css';
import './musei_widget_media.css';

import MainWidget from './components/main_widget/MainWidget';
import PhoneWidget from './components/phone_widget/PhoneWidget';



export default function MuseiWidget() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1100);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="musei_widget">
			{isMobile ? <PhoneWidget /> : <MainWidget />}
		</div>
	);
}