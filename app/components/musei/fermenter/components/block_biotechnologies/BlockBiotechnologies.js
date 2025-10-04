"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

import './block_biotechnologies.css';

import blockImg1Webp from '../../img/block_biotechnologies/img1.webp';
import blockImg1Png from '../../img/block_biotechnologies/img1.png';

// Данные о биотехнологиях
const biotechnologiesData = {
    "microscopic_pharmacy": {
        title: "Микроскопическая аптека",
        description: "Микробиологические технологии играют ключевую роль в современной медицине и фармацевтике. Этот раздел охватывает производство ликарственных средств, вакцин, ферментов и других терапевтических препаратов с помощью микроогранизмов. К примеру, бактерии и грибы используются для синтеза антибиотиков, таких как пенициллин и стрептомицин. Важнейшими направлениями так же явдяются биотехнологическое производство инсулина и других гормонов, получаемых с использованием рекомбинативных ДНК-технологий. Микробиологические методы позволяют производить биоактивные соединения в промышленных масштабах, снижая затраты и повышая эффективность лечения. Этот раздел, иногда называемый 'микроскопической аптекой', является неотъемлемой частью современной фармацевтической промышленности и направлен на разработку новыъ методов лечения болезней, от инфекций до онкологических заболеваний."
    },
    "prehistoric_biotechnologies": {
        title: "Доисторические биотехнологии",
        description: "Простейшие биотехнологии, возникшие задолго до современной науки, включают в себя методы брожения, сыроварения и закваски, использовавшиеся древними культурами"
    },
    "edible_biotechnologies": {
        title: "Cъедобные биотехнологии",
        description: "Раздел биотехнологий, связанный с производством пищевых продуктов, таких как ферментированные продукты, исскуственное мясо и функциональные добавки"
    },
    "biotechnologies_and_earth_bowels": {
        title: "Биотехнологии и земные недра",
        description: "Простейшие биотехнологии, возникшие задолго до современной науки, включают в себя методы брожения, сыроварения и закваски, использовавшиеся древними культурами"
    },
    "air_water_soil_purification": {
        title: "Очистка воздуха, воды и почвы",
        description: "Простейшие биотехнологии, возникшие задолго до современной науки, включают в себя методы брожения, сыроварения и закваски, использовавшиеся древними культурами"
    },
    "look_into_future": {
        title: "Взгляд в будущее",
        description: "Простейшие биотехнологии, возникшие задолго до современной науки, включают в себя методы брожения, сыроварения и закваски, использовавшиеся древними культурами"
    }
};

export default function BlockBiotechnologies({ 
    isHidden, 
    activeIndex, 
    selectedBiotechnology, 
    showDetails, 
    onButtonClick, 
    onLearnMore 
}) {
    // Получаем данные о выбранной биотехнологии
    const selectedBiotechData = selectedBiotechnology ? biotechnologiesData[selectedBiotechnology] : null;

    return (
        <div className={`block_biotechnologies ${isHidden ? '_hidden' : ''}`}>
           <div className={`block_selection_biotechnologies ${showDetails ? '_hidden' : ''}`}>
                <div className="block_img">
                    <picture style={{ position: "absolute", width: "100%", height: "100%"}}>
                        <source srcSet={blockImg1Webp.src} type="image/webp" />
                        <source srcSet={blockImg1Png.src} type="image/jpeg" />
                        <Image 
                            src={blockImg1Png} 
                            alt="" 
                            fill
                            unoptimized={true}
                        />
                    </picture>
                </div>

                <div className="block_selection">
                    <div className={`button_selection ${activeIndex === 0 ? '_active' : ''}`}>
                        <button onClick={() => onButtonClick(0, 'microscopic_pharmacy')}>
                            <span className="text">Микроскопическая аптека</span>

                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M12.5 2V23M2 12.7442H23" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </button>

                        <div className="block_info">
                            <p>Огромный раздел микроскопических технологий - это получение лекарств и других фармацевтических субстанций</p>

                            <span className="learn_more" onClick={() => onLearnMore('microscopic_pharmacy')}>Узнать больше</span>
                        </div>
                    </div>

                    <div className={`button_selection ${activeIndex === 1 ? '_active' : ''}`}>
                        <button onClick={() => onButtonClick(1, 'prehistoric_biotechnologies')}>
                            <span className="text">Доисторические биотехнологии</span>

                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M12.5 2V23M2 12.7442H23" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </button>

                        <div className="block_info">
                            <p>Простейшие биотехнологии, возникшие задолго до современной науки, включают в себя методы брожения, сыроварения и закваски, использовавшиеся древними культурами</p>

                            <span className="learn_more" onClick={() => onLearnMore('prehistoric_biotechnologies')}>Узнать больше</span>
                        </div>
                    </div>

                    <div className={`button_selection ${activeIndex === 2 ? '_active' : ''}`}>
                        <button onClick={() => onButtonClick(2, 'edible_biotechnologies')}>
                            <span className="text">Cъедобные биотехнологии</span>

                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M12.5 2V23M2 12.7442H23" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </button>

                        <div className="block_info">
                            <p>Раздел биотехнологий, связанный с производством пищевых продуктов, таких как ферментированные продукты, исскуственное мясо и функциональные добавки</p>

                            <span className="learn_more" onClick={() => onLearnMore('edible_biotechnologies')}>Узнать больше</span>
                        </div>
                    </div>

                    <div className={`button_selection ${activeIndex === 3 ? '_active' : ''}`}>
                        <button onClick={() => onButtonClick(3, 'biotechnologies_and_earth_bowels')}>
                            <span className="text">Биотехнологии и земные недра</span>

                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M12.5 2V23M2 12.7442H23" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </button>

                        <div className="block_info">
                            <p>Простейшие биотехнологии, возникшие задолго до современной науки, включают в себя методы брожения, сыроварения и закваски, использовавшиеся древними культурами</p>

                            <span className="learn_more" onClick={() => onLearnMore('biotechnologies_and_earth_bowels')}>Узнать больше</span>
                        </div>
                    </div>

                    <div className={`button_selection ${activeIndex === 4 ? '_active' : ''}`}>
                        <button onClick={() => onButtonClick(4, 'air_water_soil_purification')}>
                            <span className="text">Очистка воздуха, воды и почвы</span>

                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M12.5 2V23M2 12.7442H23" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </button>

                        <div className="block_info">
                            <p>Простейшие биотехнологии, возникшие задолго до современной науки, включают в себя методы брожения, сыроварения и закваски, использовавшиеся древними культурами</p>

                            <span className="learn_more" onClick={() => onLearnMore('air_water_soil_purification')}>Узнать больше</span>
                        </div>
                    </div>

                    <div className={`button_selection ${activeIndex === 5 ? '_active' : ''}`}>
                        <button onClick={() => onButtonClick(5, 'look_into_future')}>
                            <span className="text">Взгляд в будущее</span>

                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M12.5 2V23M2 12.7442H23" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </button>

                        <div className="block_info">
                            <p>Простейшие биотехнологии, возникшие задолго до современной науки, включают в себя методы брожения, сыроварения и закваски, использовавшиеся древними культурами</p>

                            <span className="learn_more" onClick={() => onLearnMore('look_into_future')}>Узнать больше</span>
                        </div>
                    </div>
                </div>

                <div className="block_hint">
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 42" fill="none">
                            <path d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807614 11.0711 0.807613 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM12 42L13.5 42L13.5 2L12 2L10.5 2L10.5 42L12 42Z"/>
                        </svg>
                    </span>

                    <p>Выберите биотехнологию, чтобы <br /> узнать о ней больше</p>
                </div>
            </div>

            <div className={`block_info_biotechnology ${!showDetails ? '_hidden' : ''}`}>
                {selectedBiotechData && (
                    <div className="content">
                        <div className="block_header">
                            <span className="text">{selectedBiotechData.title}</span>
                        </div>

                        <div className="block_info">
                            <p>{selectedBiotechData.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};