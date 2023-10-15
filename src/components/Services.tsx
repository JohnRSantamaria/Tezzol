import React from 'react';
import AnimatedText from './AnimatedText';
import AnimatedTitle from './FramerMotion/AnimatedTitle';

export default function Services() {
	return (
		<section className='flex flex-col items-center gap-4 h-screen w-full border pt-20 '>
			<AnimatedTitle title='Servicios' />
			<section className='container flex w-full '>
				<figure className='w-1/2'>Imagen</figure>
				<article className='w-1/2'>Decripcion</article>
			</section>
		</section>
	);
}
