"use client";

import Link from 'next/link';
import Image from "next/image";

import './header.css';
import './header_media.css';



export default function Header() {
	return (
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
						<Link href="/about-us" className="nav_link">о нас</Link>
						<Link href="/musei" className="nav_link">интерактивный музей</Link>
						<Link href="/video-biotech" className="nav_link">видеоуроки</Link>

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
	);
}