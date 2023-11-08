import React from 'react';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import Rodri from '../../public/images/rodri.png';
import Scrawl from './Scrawl';
export default function AboutMe() {
	return (
		<section className='flex flex-col items-center  w-full bg-light text-dark '>
			<section>
				<AnimatedText text='Mi historia' />
			</section>

			<section className='relative flex flex-col gap-8 items-center text-justify container max-w-7xl'>
				<p className='text-md px-4'>
					Mi historia es la prueba de que ningún comienzo es demasiado humilde para
					<span className='text-primary'> alcanzar el éxito.</span> Comencé mi viaje en las calles
					de Colombia, <span className='text-primary'>vendiendo dulces</span> y pasando noches{' '}
					<span className='text-primary'>sin dinero</span> en ellas. Pero nunca permití que las
					dificultades me derrotaran. En lugar de eso,{' '}
					<span className='text-primary'>aprendí las claves</span> para superar esas situaciones y
					transformar mi vida.
				</p>
				<article className='px-4 md:hidden'>
					<div className='border-l-2 border-primary px-2 text-3xl'>
						La única forma de fallar es no intentarlo.
					</div>
				</article>

				<article className='md:flex items-center hidden order-3'>
					<div className='px-4 w-1/2'>
						<div className='border-l-2 border-primary px-2 text-3xl'>
							La única forma de fallar es no intentarlo.
						</div>
					</div>
					<figure className='max-w-lg w-1/2'>
						<Image src={Rodri} alt='imagen de un hombre de perfil' className='w-full h-auto' />
					</figure>
				</article>

				<p className='text-md px-4 '>
					Hoy, mi realidad es muy diferente.
					<span className='text-primary'> Vivo de internet</span>, y tengo la libertad de elegir
					dónde estar en este hermoso mundo. Ahora,
					<span className='text-primary'> quiero compartir</span> contigo las mismas estrategias y
					conocimientos que me ayudaron a lograr esta transformación.{' '}
					<span className='text-primary'>Estoy aquí</span> para guiarte en tu viaje, para que{' '}
					<span className='text-primary'>puedas superar</span> cualquier obstáculo que se cruce en
					tu camino y alcanzar tus sueños. ¡Así que únete a mí y descubre cómo puedes escribir tu
					propia historia de éxito!
				</p>
				{/* no nesitas motivacion necesitas disciplina */}
				<figure className='max-w-sm md:hidden'>
					<Image src={Rodri} alt='imagen de un hombre de perfil' className='w-full h-auto' />
				</figure>
				<Scrawl className='-top-20  left-0 -rotate-45 '>no tengo tiempo</Scrawl>
				<Scrawl className='bottom-0 -right-10 rotate-90'>nunca tendre nada</Scrawl>
				<Scrawl className='bottom-32 -left-20 rotate-12 md:bottom-1/2 '>
					Esta es la vida que nos toco
				</Scrawl>
			</section>
		</section>
	);
}
