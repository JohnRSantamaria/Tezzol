import React from 'react';
import AnimatedText from './AnimatedText';

export default function HeroImage() {
	return (
		<div>
			<div className='text-5xl md:text-6xl font-bold'>
				<AnimatedText
					text='Esteban Rodríguez'
					className='mb-16 !text-5xl md:!text-6xl xl:!text-9xl'
				/>
			</div>
			<div className='text-xl md:text-2xl font-light text-dark dark:text-light mb-8'>
				Mentorías / Mindset / Monetización
			</div>
		</div>
	);
}
