import React from 'react';
import AnimatedText from './AnimatedText';
import RippedBotton from '../../public/svg/ripped-bottom';
import SignInButton from './SignInButton';
export default function HeroImage() {
	return (
		<main className='relative flex flex-col justify-center w-full min-h-screen bg-dark text-light overflow-hidden'>
			<section className='container flex flex-col items-center mx-auto'>
				<div className='relative text-3xl md:text-4xl xl:text-5xl font-semibold text-primary'>
					Líbrate a ti mismo
				</div>
				<AnimatedText
					text='DOMINA TU MENTE MONETIZA TU VIDA'
					className='!text-light md:!text-6xl xl:!text-7xl '
				/>
				<div className='font-semibold text-primary text-xl md:text-2xl xl:text-2xl mb-8'>
					Mentorías / Mindset / Monetización
				</div>
				<RippedBotton className='absolute -bottom-16' />
				<SignInButton />
			</section>
		</main>
	);
}
