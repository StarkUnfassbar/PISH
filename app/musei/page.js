import Link from 'next/link';
import Image from 'next/image';

import "./page.css";

import ZAARestoration from '../components/musei/zaa_restoration/ZAARestoration';
import MuseiWidget from '../components/musei/musei_widget/MuseiWidget';



export default function Musei() {
  return (
    <div className="app">
		<div className="block_game">
			{/* <ZAARestoration /> */}
			<MuseiWidget />
		</div>
    </div>
  );
}