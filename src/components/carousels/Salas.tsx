import React, { Children } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import RAED from '../../../public/images/sala-raed.png';
import RAEDVIP from '../../../public/images/sala-raed-vip.png';

export default function CaruoselSalas() {
	return (
		<Carousel
			width={'100%'}
			showThumbs={false}
			autoPlay
			infiniteLoop
			emulateTouch
			stopOnHover
			showArrows={false}
			interval={5000}
			showIndicators={false}
			className='w-full py-4 px-2 '
		>
			<article>
				<section className='flex flex-col md:flex-row gap-4 items-center justify-evenly md:max-h-96 h-full w-full'>
					<article className='md:w-1/2 text-justify hidden md:block'>
						<div className='flex flex-col gap-4'>
							<h2 className='text-2xl font-semibold'>
								RAED <span className='text-primary'>VIP</span>
							</h2>
							<p>
								Estoy aquí para ofrecerte una experiencia completa que{' '}
								<span className='text-primary'>cambiará tu vida</span>. Comenzarás con una mentoría
								inicial <span className='text-primary'>1 a 1 conmigo</span>, donde compartiré
								contigo mi valioso BLUEPRINT. Únete a mis mentorías semanales grupales VIP en vivo,
								recibe mi apoyo individual directo y accede a todas las mentorías VIP previas. Forma
								parte de nuestra comunidad <span className='text-primary'>VIP RAED</span>, donde
								juntos cambiaremos tu entorno y círculo, transformaremos tus hábitos y mindset, y{' '}
								<span className='text-primary'>aprenderás a vender </span>como yo. Elimina tus
								vicios y descubre cómo{' '}
								<span className='text-primary'>generar ingresos por internet</span> desde cero o
								conviértete en un exitoso coach en línea.
							</p>
						</div>
					</article>
					<div className='flex flex-col gap-2'>
						<Image
							src={RAEDVIP}
							alt='imagen del plan standar'
							className='!h-80 !w-auto !max-h-96 !max-w-full !object-contain !select-none '
						/>
						<button className='border-2 border-primary bg-primary text-light font-semibold px-4 py-2 rounded-md'>
							Ingresar a la sala
						</button>
					</div>
				</section>
			</article>
			<article>
				<section className='flex flex-col md:flex-row gap-4 items-center justify-evenly md:max-h-96 h-full w-full'>
					<article className='md:w-1/2 text-justify hidden md:block'>
						<div className='flex flex-col gap-4'>
							<h2 className='text-2xl font-semibold'>RAED</h2>
							<p>
								Estoy aquí para ofrecerte una experiencia completa que{' '}
								<span className='text-primary'>cambiará tu vida</span>. Comenzarás con una mentoría
								inicial <span className='text-primary'>1 a 1 conmigo</span>, donde compartiré
								contigo mi valioso BLUEPRINT. Únete a mis mentorías semanales grupales VIP en vivo,
								recibe mi apoyo individual directo y accede a todas las mentorías VIP previas. Forma
								parte de nuestra comunidad <span className='text-primary'>VIP RAED</span>, donde
								juntos cambiaremos tu entorno y círculo, transformaremos tus hábitos y mindset, y{' '}
								<span className='text-primary'>aprenderás a vender </span>como yo. Elimina tus
								vicios y descubre cómo{' '}
								<span className='text-primary'>generar ingresos por internet</span> desde cero o
								conviértete en un exitoso coach en línea.
							</p>
						</div>
					</article>
					<div className='flex flex-col gap-2'>
						<Image
							src={RAED}
							alt='imagen del plan standar'
							className='!h-80 !w-auto !max-h-96 !max-w-full !object-contain !select-none '
						/>
						<button className='border-2 border-primary bg-primary text-light font-semibold px-4 py-2 rounded-md'>
							Ingresar a la sala
						</button>
					</div>
				</section>
			</article>
		</Carousel>
	);
}
