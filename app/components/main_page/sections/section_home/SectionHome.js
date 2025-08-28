import Link from 'next/link';
import Image from "next/image";

import './section_home.css';
import './section_home_media.css';

import StandardButton from '../../standard_button/StandardButton';



export default function SectionHome({ isMobile }) {
	return (
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
					{isMobile ? (
						<img src="/img/main/home/pattern_1_mobile.png" alt="pattern on the background" />
					) : (
						<img src="/img/main/home/pattern_1.png" alt="pattern on the background" />
					)}
					{/* <Image src="/img/main/home/pattern_1.png" alt="pattern on the background" fill /> */}
				</div>

				<div className="pattern">
					{/* <Image src="/img/main/home/pattern_2.png" alt="pattern on the background" fill unoptimized={true} /> */}
					<Image src="/img/main/ellips_1.svg" alt="pattern on the background" fill unoptimized={true} />
				</div>

				<div className="pattern">
					{/* <Image src="/img/main/home/pattern_3.png" alt="pattern on the background" fill unoptimized={true} /> */}
					<Image src="/img/main/ellips_1.svg" alt="pattern on the background" fill unoptimized={true} />
				</div>

				<div className="pattern">
					{/* <Image src="/img/main/home/pattern_4.png" alt="pattern on the background" fill unoptimized={true} /> */}
					<Image src="/img/main/ellips_1.svg" alt="pattern on the background" fill unoptimized={true} />
				</div>
			</div>
		</section>
	);
}