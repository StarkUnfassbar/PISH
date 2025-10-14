"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";

import './popup_welcome.css';
import './popup_welcome_media.css';



export default function PopupWelcome({ onClose }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const closeTimer = setTimeout(() => {
            setIsClosing(true);
            
            const removeTimer = setTimeout(() => {
                setIsVisible(false);
                if (onClose) {
                    onClose();
                }
            }, 300);

            return () => clearTimeout(removeTimer);
        }, 3000);

        return () => clearTimeout(closeTimer);
    }, [onClose]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`popup_welcome ${isClosing ? '_hidden' : ''}`}>
            <div className="popup_content">
                <div className="block_img">
                    <Image src="/img/video_biotech/popup_bg.png" alt="" fill unoptimized={true} />
                </div>

                <div className="block_content">
                    <div className="block_text">
                        <h1>Добро пожаловать в биотех музей!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}