import React from 'react';
import AnimatedText from './AnimatedText';
import RippedBotton from '../../public/svg/ripped-bottom';
export default function HeroImage() {
	return (
		<main className='relative flex flex-col justify-center w-full min-h-screen bg-dark overflow-hidden'>
			<section className='container flex flex-col items-center mx-auto'>
				<div className='relative text-4xl font-semibold text-primary'>Líbrate a ti mismo</div>
				<div className='text-5xl md:text-6xl font-bold'>
					<AnimatedText
						text='DOMINA TU MENTE MONETIZA TU VIDA'
						className='mb-16 !text-5xl md:!text-6xl xl:!text-9xl !text-light'
					/>
				</div>
				<div className='md:text-2xl font-semibold text-primary text-2xl dark:text-light mb-8'>
					Mentorías / Mindset / Monetización
				</div>
				<RippedBotton className='absolute -bottom-16' />
			</section>
		</main>
	);
}
