// app/musei/page.js
"use client";

import { useState, useEffect } from 'react';

import "./page.css";

import MuseiWidget from '../components/musei/musei_widget/MuseiWidget';
import PopupMusei from '../components/musei/popup_musei/PopupMusei';



export default function Musei() {
    const [isMobile, setIsMobile] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1100);
        };

        // Проверяем, отправлял ли пользователь форму ранее
        const checkFormSubmission = () => {
            const formSubmitted = localStorage.getItem('museiFormSubmitted');
            if (formSubmitted !== 'true') {
                setShowPopup(true);
            }
        };

        handleResize();
        checkFormSubmission();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleFormSuccess = () => {
        setShowPopup(false);
    };

    if (isMobile === null) {
        return (<div className="musei_page"></div>);
    }
    
    return (
        <div className="musei_page">
            {showPopup && (
                <PopupMusei 
                    onFormSuccess={handleFormSuccess}
                />
            )}
			
            <MuseiWidget isMobile={isMobile} />
        </div>
    );
}