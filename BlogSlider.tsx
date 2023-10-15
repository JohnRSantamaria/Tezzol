import React from 'react';
import Ripped from './public/svg/ripped';

export default function BlogSlider() {
	return (
		<div className='relative top-0 w-full h-screen pt-20 bg-dark overflow-hidden'>
			<Ripped className='absolute top-0' />
		</div>
	);
}
