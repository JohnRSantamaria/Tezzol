import React from 'react';
import AnimatedText from './AnimatedText';
import CaruoselSalas from './carousels/Salas';

export default function Services() {
	return (
		<section className='container flex flex-col items-center w-full bg-transparent text-dark'>
			<AnimatedText text='Salas' className='!text-dark' />
			<CaruoselSalas />
		</section>
	);
}
