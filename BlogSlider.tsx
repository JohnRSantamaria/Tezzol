import React from 'react';
import Ripped from './public/svg/ripped';
import AnimatedText from '@/components/AnimatedText';

export default function BlogSlider() {
	return (
		<section className='relative top-0 w-full min-h-screen pt-20 bg-dark text-light overflow-hidden border'>
			<Ripped className='absolute top-0' />
			<AnimatedText text='Blog' className='!text-light' />
			<div className='container mx-auto px-4 py-20 border'>
				<div className='flex flex-col items-center justify-center border w-1/2'>
					<h2 className='text-4xl font-bold text-center'>Blog</h2>
					<p className='text-center text-lg mt-4'>
						Here you can find some of my articles and tutorials.
					</p>
				</div>
			</div>
		</section>
	);
}
