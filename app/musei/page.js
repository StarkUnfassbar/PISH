"use client";

import { useState, useEffect } from 'react';

import "./page.css";

import MuseiWidget from '../components/musei/musei_widget/MuseiWidget';



export default function Musei() {
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
		return (<div className="musei_page"></div>);
	}
	
	return (
		<div className="musei_page">
			<MuseiWidget isMobile={isMobile} />
		</div>
	);
}