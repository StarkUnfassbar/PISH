import Link from 'next/link';
import Image from "next/image";

import './section_about_museum.css';
import './section_about_museum_media.css';

import StandardButton from '../../standard_button/StandardButton';



export default function SectionAboutMuseum({ isMobile }) {
	return (
		<>
			{isMobile ? (
				<section className="about_museum mobile">
					<h1>О музее</h1>

					<div className="section_content">
						<div className="upper_part">
							<div className="block_imgs">
								<img src="/img/main/about_museum/pattern_1_mobile.png" alt="" />
							</div>

							<div className="block_text">
								<h3>будущее рядом</h3>

								<p>
									Сегодня биотехнологии применяются в самых разных отраслях — фармакологии, экологии, 
									металлодобывающей промышленности, производстве продуктов питания и других. 
								</p>
							</div>
						</div>

						<div className="lower_part">
							<p>
								Как приготовить котлету, из-за которой ни одна корова не пострадала, что такое 
								FoodNet, как разрабатываются вакцины, новые биодобавки, 
								как спасти планету от загрязнения, очистить море 
								от пластика и как новые технологии изменят нашу жизнь – в музее биотеха. 
							</p>

							<div className="block_img">
								<img src="/img/main/about_museum/pattern_2_mobile.png" alt="" />
							</div>
						</div>

						<StandardButton text="Посетить онлайн" type="standard" />
					</div>

					{/* <div className="patterns">
						<div className="pattern">
							<Image src="/img/main/about_museum/pattern_4.png" alt="pattern on the background" fill unoptimized={true} />
						</div>
					</div> */}
				</section>
			) : (
				<section className="about_museum main">
					<h1><span>О музее</span></h1>

					<div className="section_content">
						<div className="upper_part">
							<div className="block_imgs">
								<div className="block_img">
									{/* <img src="/img/main/about_museum/pattern_1.png" alt="" /> */}
									<img src="/img/main/about_museum/block_img_1__part_1.png" alt="" />
									<img src="/img/main/about_museum/block_img_1__part_2.svg" alt="" />
									<img src="/img/main/about_museum/block_img_1__part_3.svg" alt="" />
								</div>

								<div className="block_img">
									{/* <img src="/img/main/about_museum/pattern_2.png" alt="" /> */}
									<img src="/img/main/about_museum/block_img_2__part_1.png" alt="" />
									<img src="/img/main/about_museum/block_img_2__part_2.svg" alt="" />
									<img src="/img/main/about_museum/block_img_2__part_3.svg" alt="" />
								</div>
							</div>

							<div className="block_info">
								<div className="text_container">
									<h3>будущее рядом</h3>

									<p>
										Сегодня биотехнологии применяются в самых разных отраслях — фармакологии, экологии, 
										металлодобывающей промышленности, производстве продуктов питания и других. 
									</p>
								</div>
							</div>
						</div>

						<div className="lower_part">
							<p>
								Как приготовить котлету, из-за которой ни одна корова не пострадала, что такое 
								FoodNet, как разрабатываются вакцины, новые биодобавки, 
								как спасти планету от загрязнения, очистить море 
								от пластика и как новые технологии изменят нашу жизнь – в музее биотеха. 
							</p>

							<div className="block_img">
								{/* <img src="/img/main/about_museum/pattern_3.png" alt="" /> */}
								<img src="/img/main/about_museum/block_img_3__part_1.png" alt="" />
								<img src="/img/main/about_museum/block_img_3__part_2.svg" alt="" />
								<img src="/img/main/about_museum/block_img_3__part_3.svg" alt="" />
							</div>
						</div>

						<StandardButton text="Посетить онлайн" type="standard" />
					</div>

					<div className="patterns">
						<div className="pattern">
							<Image src="/img/main/about_museum/pattern_4.png" alt="pattern on the background" fill unoptimized={true} />
						</div>
					</div>
				</section>
			)}
		</>
	);
}