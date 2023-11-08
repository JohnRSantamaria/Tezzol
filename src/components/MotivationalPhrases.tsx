import React from 'react';

export default function MotivationalPhrases() {
	return (
		<section className='relative container flex flex-col items-center gap-16 px-4 w-full bg-light text-dark max-w-7xl'>
			<article className='text-2xl font-medium text-center md:w-1/2'>
				Voy a compartir contigo el secreto que, si lo aplicas este año, te traerá un éxito masivo
				para el resto de tu vida en todos los ámbitos.
			</article>

			<article className='flex flex-col gap-8'>
				<p className='md:w-1/2'>
					<span className='text-primary text-2xl'>&#5817;</span> Todos los pasos aparentemente
					insignificantes... los más pequeños... son los que finalmente crearán la{' '}
					<span className='font-bold text-primary text-lg'>BESTIA</span> en la que te conviertes y
					que no puede ser detenida.
				</p>
				<p className='md:w-1/2 md:ml-auto'>
					<span className='font-bold text-primary text-lg'>No es simplemente</span> una hora de
					despertar...
				</p>
				<p className='md:w-1/2 '>
					<span className='text-primary text-2xl '>&#5825;</span> La motivación puede ser efímera y
					pasajera, pero la dedicación es la fuerza que te impulsa incluso cuando la motivación
					falla. No busques inspiración constante, busca la voluntad de seguir adelante incluso
					cuando las cosas se vuelven difíciles.
				</p>

				<p className='md:w-1/2 md:ml-auto'>
					<span className='font-bold text-primary text-lg'>No necesitas motivación</span>, necesitas
					dedicación
				</p>
				<p className='md:w-1/2'>
					<span className='text-primary text-2xl'>&#5822;</span>
					Naciste con un potencial ilimitado para triunfar, pero no te conformes con simplemente
					sobrevivir.
				</p>
				<p className='md:w-1/2 md:ml-auto'>
					<span className='font-bold text-primary text-lg'>Naciste para triunfar</span>, no para
					sobrevivir.
				</p>
			</article>
		</section>
	);
}
