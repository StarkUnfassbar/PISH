"use client";

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import "./page.css";
import "./page_media.css";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import SectionInfoMusei from '../components/about_us/section_info_musei/SectionInfoMusei';
import SectionAdvantages from '../components/about_us/section_advantages/SectionAdvantages';



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
		<div className="page_about_us">
			<div className="page_bg">
				<img src="/img/about_us/bg.png" alt="" />
			</div>

			<Header isMobile={isMobile} />

			<main>
				<SectionInfoMusei isMobile={isMobile} />

				<SectionAdvantages isMobile={isMobile} />
			</main>

			<Footer isMobile={isMobile} patternsActive={true} />
		</div>
	);
}