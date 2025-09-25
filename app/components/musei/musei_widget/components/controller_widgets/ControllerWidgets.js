"use client";

import { useState, useEffect } from 'react';
import './controller_widgets.css';

import ExhibitInDev from '../exhibit_in_dev/ExhibitInDev';
import ZAARestoration from '../../../zaa_restoration/ZAARestoration';
import Medicine from '../../../medicine/Medicine';
import Aquabio from '../../../aquabio/Aquabio';
import ChallengesCentury from '../../../challenges_century/ChallengesCentury';

const WidgetID = {
	WIDGET_IN_DEV: "widget_in_dev",
	ZAA_RESTORATION: "zaa_restoration",
	MEDICINE: "medicine",
	AQUABIO: "aquabio",
	CHALLENGES_CENTURY: "challenges_century",
};

const WIDGET_COMPONENTS = {
	[WidgetID.WIDGET_IN_DEV]: ExhibitInDev,
	[WidgetID.ZAA_RESTORATION]: ZAARestoration,
	[WidgetID.MEDICINE]: Medicine,
	[WidgetID.AQUABIO]: Aquabio,
	[WidgetID.CHALLENGES_CENTURY]: ChallengesCentury,
};

export default function ControllerWidgets({ openWidget, idOpenedWidget, funForCloseWidget, isMobile }) {
	const [showWidgetWindow, setShowWidgetWindow] = useState(false);
	const [currentWidget, setCurrentWidget] = useState(null);

	useEffect(() => {
		if(openWidget){
			setCurrentWidget(idOpenedWidget);

			setTimeout(() => {
				setShowWidgetWindow(true);
			}, 100);
		} else{
			setShowWidgetWindow(false);

			setTimeout(() => {
				setCurrentWidget(null);
			}, 1050);
		}
	}, [openWidget, idOpenedWidget]);

	const renderWidget = () => {
		if (!currentWidget) return null;
		
		if(WIDGET_COMPONENTS[currentWidget]){
			const WidgetComponent = WIDGET_COMPONENTS[currentWidget];
			return <WidgetComponent funForCloseWidget={funForCloseWidget} isMobile={isMobile} />;
		}

		return <ExhibitInDev funForCloseWidget={funForCloseWidget} />;
	};

	

	return (
		<div className={`widget_window ${showWidgetWindow ? '_open' : ''} ${currentWidget || ''}`}>
			{renderWidget()}
		</div>
	);
}