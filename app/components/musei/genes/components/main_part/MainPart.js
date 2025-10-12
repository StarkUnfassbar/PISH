"use client";

import Image from "next/image";
import './main_part.css';

import imgHitUp from '../../img/level_1/main_part/hint_up.png';
import imgRnk from '../../img/level_1/rnk.png';
import imgDnk from '../../img/level_1/dnk.png';



export default function MainPart({ 
	mainPartHidden, 
	firstRowNotes, 
	secondRowNotes, 
	activeNoteIndex, 
	currentPairIndex, 
	timerActive, 
	onAnswer 
}) {
	return (
		<div className={`main_part ${mainPartHidden ? '_hidden' : ''}`}>
			<div className="block_hint_up">
				<picture style={{ position: "absolute", width: "100%", height: "100%"}}>
					<source srcSet={imgHitUp.src} type="image/webp" />
					<source srcSet={imgHitUp.src} type="image/jpeg" />
					<Image 
						src={imgHitUp} 
						alt="" 
						fill
						unoptimized={true}
						objectFit='cover'
					/>
				</picture>
			</div>

			<div className="block_rnk">
				<picture style={{ position: "absolute", width: "100%", height: "100%"}}>
					<source srcSet={imgRnk.src} type="image/webp" />
					<source srcSet={imgRnk.src} type="image/jpeg" />
					<Image 
						src={imgRnk} 
						alt="" 
						fill
						unoptimized={true}
					/>
				</picture>
			</div>

			<div className="block_dnk">
				<picture style={{ position: "absolute", width: "100%", height: "100%"}}>
					<source srcSet={imgDnk.src} type="image/webp" />
					<source srcSet={imgDnk.src} type="image/jpeg" />
					<Image 
						src={imgDnk} 
						alt="" 
						fill
						unoptimized={true}
					/>
				</picture>
			</div>

			<div className="block_rkn_notes">
				<div className="first_row">
					{firstRowNotes.map((note, index) => (
						<div 
							key={index} 
							className={`rnk_note ${note ? `_${note.toLowerCase()}_note` : ''} ${activeNoteIndex === index ? '_active' : ''} ${index <= currentPairIndex ? '_visible' : ''}`}
						></div>
					))}
				</div>

				<div className="second_row">
					{secondRowNotes.map((note, index) => (
						<div 
							key={index} 
							className={`rnk_note ${note ? `_${note.toLowerCase()}_note` : ''} ${index <= currentPairIndex ? '_visible' : ''}`}
						></div>
					))}
				</div>
			</div>

			<div className="block_btns_notes">
				<p>Кнопки ркн нот:</p>

				<div className="block_buttons">
					<button 
						className="button_rnk_note _a_note" 
						onClick={() => onAnswer('A')}
						disabled={!timerActive}
					>
						A
					</button>
					<button 
						className="button_rnk_note _u_note" 
						onClick={() => onAnswer('U')}
						disabled={!timerActive}
					>
						U
					</button>
					<button 
						className="button_rnk_note _c_note" 
						onClick={() => onAnswer('C')}
						disabled={!timerActive}
					>
						C
					</button>
					<button 
						className="button_rnk_note _g_note" 
						onClick={() => onAnswer('G')}
						disabled={!timerActive}
					>
						G
					</button>
				</div>
			</div>
		</div>
	);
}