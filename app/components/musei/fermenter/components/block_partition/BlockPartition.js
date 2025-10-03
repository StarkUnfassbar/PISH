// BlockPartition.js
"use client";

import { useState, useEffect } from 'react';

import './block_partition.css';

import blockImg1 from '../../img/block_partition/Bioengineering/1.png';
import blockImg2 from '../../img/block_partition/Bioengineering/2.jpg';
import blockImg3 from '../../img/block_partition/Bioengineering/3.jpg';
import blockImg4 from '../../img/block_partition/Bioengineering/4.jpg';
import blockImg5 from '../../img/block_partition/Bioengineering/5.jpg';
import blockImg6 from '../../img/block_partition/Bioengineering/6.jpg';
import blockImg7 from '../../img/block_partition/Bioengineering/7.png';

// Данные о живых системах для каждого раздела
const partitionsData = {
    "bioengineering": {
        liveSystems: [
            {
                id: "archaea",
                title: "Архея",
                description: "Эти микроорганизмы, обитающие в экстремальных условиях, изучаются для создания устойчивых ферментов используемых в биотехнологии и фармакологии. Их ферменты применяются в биокатализе при производстве лекарств, способных сохранять активность в жестких условиях.",
                image: blockImg1
            },
            {
                id: "actinobacteria",
                title: "Актинобактерии",
                description: "Эти бактерии являются основными источниками антибиотиков, таких как стрептомицин и тетрациклин. Актибактерии играют ключевую роль в борьбе с инфекциями и широко используются в фармацевтической промышленности для разработки новых противомикробных препаратов.",
                image: blockImg2
            },
            {
                id: "viruses",
                title: "Вирусы",
                description: "Вирусы, такие как аденовирусы и лентивирусы, используются как векторы для доставки генов в клетки в ходе генной терапии. Это важное направление в медицине, которое позволяет лечить генетические заболевания и развивать новые методы иммунной терапии.",
                image: blockImg3
            },
            {
                id: "mold_fungi",
                title: "Плесневелые грибы",
                description: "Эти грибы известны как источник пенициллина - первого массово применяемого антибиотика. Современные исследования и производство антибиотиков, основанных на плесневых грибах, продолжают играть важнейшую роль в лечении инфекционных заболеваний.",
                image: blockImg4
            },
            {
                id: "cho_cells",
                title: "Клетки яичника китайского хомячка (СНО)",
                description: "Эти клетки являются стандартной платформой для производства моноклональных антител, гормонов и вакцин. Их применяют в биофармацевтике для создания жизненно важных препаратов, используемых в лечении рака, аутоимунных и других заболеваниях.",
                image: blockImg5
            },
            {
                id: "crab_chitin",
                title: "Краб | Хитин",
                description: "Хитин, получаемый из панцерей крабов и других ракообразных, активно используются в медицине. Его производные, такие как хитозан применяются для заживления ран, создания лекарств. Хитозан так же используется для производства перевязочных материалов с антимикробными свойствами и для создания биопластырей.",
                image: blockImg6
            },
            {
                id: "corynebacteria",
                title: "Коринебактерии",
                description: "Эти бактерии активно используются для биосинтеза аминокислот, таких как глутамат и лимизин, которые применяются в производстве медицинских добавок и в терапевтических целях",
                image: blockImg7
            }
        ]
    },
    "industrial_goods": {
        liveSystems: [
            {
                id: "industrial_1",
                title: "Промышленная система 1",
                description: "Описание промышленной системы 1",
                image: blockImg1
            },
            {
                id: "industrial_2",
                title: "Промышленная система 2",
                description: "Описание промышленной системы 2",
                image: blockImg1
            },
            {
                id: "industrial_3",
                title: "Промышленная система 3",
                description: "Описание промышленной системы 3",
                image: blockImg1
            },
            {
                id: "industrial_4",
                title: "Промышленная система 4",
                description: "Описание промышленной системы 4",
                image: blockImg1
            },
            {
                id: "industrial_5",
                title: "Промышленная система 5",
                description: "Описание промышленной системы 5",
                image: blockImg1
            },
            {
                id: "industrial_6",
                title: "Промышленная система 6",
                description: "Описание промышленной системы 6",
                image: blockImg1
            },
            {
                id: "industrial_7",
                title: "Промышленная система 7",
                description: "Описание промышленной системы 7",
                image: blockImg1
            }
        ]
    },
    "food": {
        liveSystems: [
            {
                id: "food_1",
                title: "Пищевая система 1",
                description: "Описание пищевой системы 1",
                image: blockImg1
            },
            {
                id: "food_2",
                title: "Пищевая система 2",
                description: "Описание пищевой системы 2",
                image: blockImg1
            },
            {
                id: "food_3",
                title: "Пищевая система 3",
                description: "Описание пищевой системы 3",
                image: blockImg1
            },
            {
                id: "food_4",
                title: "Пищевая система 4",
                description: "Описание пищевой системы 4",
                image: blockImg1
            }
        ]
    },
    "science": {
        liveSystems: [
            {
                id: "science_1",
                title: "Научная система 1",
                description: "Описание научной системы 1",
                image: blockImg1
            },
            {
                id: "science_2",
                title: "Научная система 2",
                description: "Описание научной системы 2",
                image: blockImg1
            },
            {
                id: "science_3",
                title: "Научная система 3",
                description: "Описание научной системы 3",
                image: blockImg1
            }
        ]
    }
};

export default function BlockPartition({ 
    isHidden, 
    partitionKey, 
    selectedLiveSystem, 
    onLiveSystemSelect,
    onBackFromSystemDetails 
}) {

    // Получаем данные о выбранном разделе
    const partitionData = partitionKey ? partitionsData[partitionKey] : null;

    if (!partitionData) {
        return (
            <div className={`block_partition ${isHidden ? '_hidden' : ''}`}>
                <p>Раздел не найден</p>
            </div>
        );
    }

    const handleLiveSystemClick = (liveSystem) => {
        if (onLiveSystemSelect) {
            onLiveSystemSelect(liveSystem);
        }
    };

    return (
        <div className={`block_partition ${isHidden ? '_hidden' : ''}`}>
            {/* Список живых систем */}
            <div className={`block_list_live_system ${selectedLiveSystem ? '_hidden' : ''}`}>
                {partitionData.liveSystems.map((system) => (
                    <div 
                        key={system.id} 
                        className="block_live_system"
                        onClick={() => handleLiveSystemClick(system)}
                    >
                        <img src={system.image.src} alt={system.title} />
                        <p>{system.title}</p>
                    </div>
                ))}
            </div>

            {/* Детальная информация о живой системе */}
            <div className={`block_info_live_system ${!selectedLiveSystem ? '_hidden' : ''}`}>
                {selectedLiveSystem && (
                    <>
                        <div className="block_img">
                            <img src={selectedLiveSystem.image.src} alt={selectedLiveSystem.title} />
                        </div>

                        <div className="block_info">
                            <h2>{selectedLiveSystem.title}</h2>

                            <div className="text">
                                <p>{selectedLiveSystem.description}</p>
                            </div>
                        </div>

                        <div className="block_hint">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 42" fill="none">
                                    <path d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807614 11.0711 0.807613 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM12 42L13.5 42L13.5 2L12 2L10.5 2L10.5 42L12 42Z"/>
                                </svg>
                            </span>
                            <p>Невозможно добавить в фермент</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};