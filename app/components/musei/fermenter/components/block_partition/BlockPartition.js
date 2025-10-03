// BlockPartition.js
"use client";

import { useState, useEffect } from 'react';

import './block_partition.css';


import blockImg1 from '../../img/block_partition/bioengineering/1.png';
import blockImg2 from '../../img/block_partition/bioengineering/2.jpg';
import blockImg3 from '../../img/block_partition/bioengineering/3.jpg';
import blockImg4 from '../../img/block_partition/bioengineering/4.jpg';
import blockImg5 from '../../img/block_partition/bioengineering/5.jpg';
import blockImg6 from '../../img/block_partition/bioengineering/6.jpg';
import blockImg7 from '../../img/block_partition/bioengineering/7.png';

import blockImg8 from '../../img/block_partition/industrial_goods/1.jpg';
import blockImg9 from '../../img/block_partition/industrial_goods/2.jpg';
import blockImg10 from '../../img/block_partition/industrial_goods/3.jpg';
import blockImg11 from '../../img/block_partition/industrial_goods/4.png';
import blockImg12 from '../../img/block_partition/industrial_goods/5.jpg';
import blockImg13 from '../../img/block_partition/industrial_goods/6.jpg';
import blockImg14 from '../../img/block_partition/industrial_goods/7.jpg';

import blockImg15 from '../../img/block_partition/food/1.jpg';
import blockImg16 from '../../img/block_partition/food/2.jpg';
import blockImg17 from '../../img/block_partition/food/3.jpg';
import blockImg18 from '../../img/block_partition/food/4.jpg';

import blockImg19 from '../../img/block_partition/science/1.png';
import blockImg20 from '../../img/block_partition/science/2.jpg';
import blockImg21 from '../../img/block_partition/science/3.jpg';

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
                title: "Энтомопатогенные нематоды",
                description: "Эти микроогранизмы применяются в сельском хозяйстве как биоинсектициды. Они помогают контролировать вредителей без химических средств, что востребовано при производстве экологически чистой продукции.",
                image: blockImg8
            },
            {
                id: "industrial_2",
                title: "Нитрифицирующие бактерии",
                description: "Эти бактерии учавствуют в очистке сточных вод, превращая аммиак в нитраты. Они важны для биофильтров на промышленных объектах.",
                image: blockImg9
            },
            {
                id: "industrial_3",
                title: "Микромицеты",
                description: "Эти грибы испольщуются для биодеградации пластиков и резины, востребованные в промышленности переработки отходов. Они разлагают важные полимерны, уменьшая экологический след промтоваров.",
                image: blockImg10
            },
            {
                id: "industrial_4",
                title: "Галофильные бактерии",
                description: "Эти микроогранизмы выживают в услових высокой солености и применяются в биодобыче редких металлов, таких как литий или уран, из соляных растворов и шахтных вод.",
                image: blockImg11
            },
            {
                id: "industrial_5",
                title: "Красные вородосли",
                description: "Красные водоросли служат источником агар-агара, который используется в текстильной промышленности для обработки тканей и в производстве бумаги. Так же его применяют в качестве загустителя в красках и косметике.",
                image: blockImg12
            },
            {
                id: "industrial_6",
                title: "Метаногенные бактерии",
                description: "Эти бактерии учавствуют в анаэробном брожении и используются для производства биогаза из органических отходов. Полученный метан применяют в энергетике и отоплении промышленных объектов.",
                image: blockImg13
            },
            {
                id: "industrial_7",
                title: "Цианобактерии",
                description: "Это фотосинтезирующие микроогранизмы используются для проиводства биотоплива и биопластика, который применяется в упаковочных материалах. Цианобактерии превращают углекислый газ и солнечный свет в углеводороды, заменяющие ископаемые топлива.",
                image: blockImg14
            }
        ]
    },
    "food": {
        liveSystems: [
            {
                id: "food_1",
                title: "Молочнокислые бактерии",
                description: "Это микроогранизмы используются в производстве йогуртов, кефира и сыра. Они ферментируют лактозу в молочную кислоту, улучшая вкус и хранение продуктов.",
                image: blockImg15
            },
            {
                id: "food_2",
                title: "Дрожжи",
                description: "Эти грибы применяются в хлебопекарной и алкогольной промышленности. Дрожжи учавствуют в брожении, производя углекислый газ и алкоголь, что важно для выпечки хлеба, производства пива и вина.",
                image: blockImg16
            },
            {
                id: "food_3",
                title: "Тауматин",
                description: "Это растение своим белком таумантином, который используется как натуральный подсластитель. Таумарин в 2000 раз слаще сахара и применяется в производстве низкокаларийных продуктов, конфет и напитков.",
                image: blockImg17
            },
            {
                id: "food_4",
                title: "Ризобиуим",
                description: "Эти симбиотические бактерии фиксируют атмосферный азот в корнях бобовых растений, улучшая плодородие почты и урожайность. Их потребность в химических удобрениях и способствует производству экологически чистой продукции.",
                image: blockImg18
            }
        ]
    },
    "science": {
        liveSystems: [
            {
                id: "science_1",
                title: "Культуры стволовых клеток",
                description: "Эти культуры активно используются в регенеративной медицине и биомедицинских исследоваеиях. Ученые механизмы дифференцировки и взаимодействия клеток, что позволяет разрабатывать новые подходы к лечению поврежденных тканей и органов.",
                image: blockImg19
            },
            {
                id: "science_2",
                title: "Метанокисляющие бактерии",
                description: "Эти микроорганизмы изучаются в экологии и микробиологии из-за их способности окислять метан, мощный парниковый газ. Исследование мтанокисляющих бактерий помогает разрабатывать технологии по снижению выбросов метана и улучшению экологической ситуации, а так же способствует понимаю углеродного цикла.",
                image: blockImg20
            },
            {
                id: "science_3",
                title: "Кишечная палочка",
                description: "Кишечная палочка (Escherichia coli) лучше всего относится к разделу Наука. Она широко используется в биотезнологических и молекулярно-биологических исследованиях. E. coli является модельным организмом для изучения генетики, физиологии и биохимии. Она так же активно применяется для производства рекомбинантных белков, таких как инсулин, и для проведения экспериментов в области генной инженерии и синтетической биологии.",
                image: blockImg21
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