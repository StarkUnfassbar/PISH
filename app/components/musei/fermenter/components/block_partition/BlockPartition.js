"use client";

import { useState, useEffect } from 'react';

import blockImg1 from '../../img/block_biotechnologies/img1.png';



export default function BlockPartition({ isHidden }) {
    return (
        <div className={`block_partition ${isHidden ? '_hidden' : ''}`}>
            <div className="block_live_system">
                <img src={blockImg1.src} alt=""></img>
                <p>Архея</p>
            </div>

            <div className="block_live_system">
                <img src={blockImg1.src} alt=""></img>
                <p>Актинобактерии</p>
            </div>

            <div className="block_live_system">
                <img src={blockImg1.src} alt=""></img>
                <p>Вирусы</p>
            </div>

            <div className="block_live_system">
                <img src={blockImg1.src} alt=""></img>
                <p>Плесневелые грибы</p>
            </div>

            <div className="block_live_system">
                <img src={blockImg1.src} alt=""></img>
                <p>Клетки яичника <br /> китайского хомячка (СНО)</p>
            </div>

            <div className="block_live_system">
                <img src={blockImg1.src} alt=""></img>
                <p>Краб | Хитин</p>
            </div>

            <div className="block_live_system">
                <img src={blockImg1.src} alt=""></img>
                <p>Коринебактерии</p>
            </div>
        </div>
    );
};