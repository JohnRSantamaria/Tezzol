import React from 'react';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import RAED from '../../public/images/sala-raed.png';
import RAEDVIP from '../../public/images/sala-raed-vip.png';

export default function Services() {
	return (
		<section className='relative flex flex-col items-center gap-4 h-screen w-full bg-light text-dark'>
			<AnimatedText text='Salas' className='!text-dark' />
			<section className='flex flex-col justify-evenly gap-8 h-[100%]'>
				<article className='flex items-center justify-evenly px-4'>
					<section className='w-1/3 '>
						<h2 className='text-2xl font-bold text-primary'>Sala RAED VIP</h2>
						<p className='text-lg font-bold'>
							Precio: <span className='text-primary'>????</span>
						</p>
						<p className='font-medium'>
							Estoy aquí para ofrecerte una experiencia completa que{' '}
							<span className='text-primary'>cambiará tu vida</span>. Comenzarás con una mentoría
							inicial <span className='text-primary'>1 a 1 conmigo</span>, donde compartiré contigo
							mi valioso BLUEPRINT. Únete a mis mentorías semanales grupales VIP en vivo, recibe mi
							apoyo individual directo y accede a todas las mentorías VIP previas. Forma parte de
							nuestra comunidad <span className='text-primary'>VIP RAED</span>, donde juntos
							cambiaremos tu entorno y círculo, transformaremos tus hábitos y mindset, y{' '}
							<span className='text-primary'>aprenderás a vender </span>como yo. Elimina tus vicios
							y descubre cómo <span className='text-primary'>generar ingresos por internet</span>{' '}
							desde cero o conviértete en un exitoso coach en línea.
						</p>
					</section>
					<Image
						src={RAEDVIP}
						alt='imagen del plan standar'
						className='h-auto w-2/12 rounded-full border-4 border-light'
					/>
				</article>
				<article className='flex items-center justify-evenly px-4'>
					<Image src={RAED} alt='imagen del plan standar' className='h-auto w-2/12' />
					<section className=' w-1/3'>
						<h2 className='text-2xl font-bold text-primary'>Sala RAED</h2>
						<p className='text-lg font-bold'>
							Precio: <span className='text-primary'>????</span>
						</p>
						<p className='font-medium'>
							Si buscas mejorar tus habilidades y mentalidad sin comprometerte al nivel VIP, te
							ofrezco mi plan <span className='text-primary'>SALA RAED</span>. Tendrás acceso a mis{' '}
							<span className='text-primary'>mentorías semanales</span> en vivo, la oportunidad de
							unirte a una comunidad privada para cambiar tu entorno y círculo, y la posibilidad de
							transformar tus hábitos y mindset. Aprende a vender como yo, elimina tus vicios y
							descubre cómo generar ingresos por internet{' '}
							<span className='text-primary '>desde cero</span>, o inicia tu viaje para convertirte
							en un coach en línea.
						</p>
					</section>
				</article>
			</section>
		</section>
	);
}
