import React from 'react';
import CustomLink from './FramerMotion/CustomLink';
import Logo from './Logo';

export default function Navbar() {
	return (
		<header className='fixed top-0 w-full flex items-center justify-between'>
			<nav className='flex items-center justify-between container ml-auto mr-auto h-20 text-xl font-normal'>
				<Logo />
				<section>
					<CustomLink href='/' title='Inicio' className='mr-4' />
					<CustomLink href='/about-me' title='Sobre mi' className='mx-4' />
					<CustomLink href='/blog' title='Blog' className='mx-4' />
				</section>
			</nav>
		</header>
	);
}
