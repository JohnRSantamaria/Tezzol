import React from 'react';
import CustomLink from './FramerMotion/CustomLink';
import Logo from './Logo';

export default function Navbar() {
	return (
		<header className='absolute z-50 top-0 right-0 w-full md:flex items-center justify-between hidden'>
			<nav className='flex items-center justify-between container ml-auto mr-auto h-20 text-xl font-normal'>
				<Logo />
				<section className='uppercase font-medium'>
					<CustomLink href='/' title='Inicio' className='mr-4' />
					<CustomLink href='/blog' title='Blog' className='mx-4' />
				</section>
			</nav>
		</header>
	);
}
