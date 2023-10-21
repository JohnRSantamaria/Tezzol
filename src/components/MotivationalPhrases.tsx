import React from 'react';
import { useBearStore } from '@/store/isAuthenticated';
import Button from './Button';

export default function MotivationalPhrases() {
	const bears = useBearStore((state) => state.bears);
	const handleClick = () => {
		useBearStore.setState({ bears: bears + 1 });
	};
	return (
		<section className='relative container flex flex-col items-center gap-16 px-4 h-screen w-full bg-light text-dark'>
			<article className='text-2xl lg:w-1/2 border-l-2  border-primary pl-4 '>
				Voy a compartir contigo el secreto que, si lo aplicas este año, te traerá un éxito masivo
				para el resto de tu vida en todos los ámbitos.
			</article>

			<article className='flex flex-col lg:w-1/2 gap-8 '>
				<p className=''>
					<span className='text-primary text-2xl'>&#5814;</span> Todos los pasos aparentemente
					insignificantes... los más pequeños... son los que finalmente crearán la BESTIA en la que
					te conviertes y que no puede ser detenida, “Por Elección”...
				</p>
				<p className=''>
					<span className='text-primary text-2xl '>&#5793;</span> …¡O la PERRA del “juego de la
					culpa” que no puede imaginar su camino simplemente por falta de seguimiento! Una vez más,
					“Por elección”… Siempre “Por SU ELECCIÓN”.
				</p>
				<p>
					<span className='font-bold text-primary text-lg'>No es simplemente</span> una hora de
					despertar...
				</p>
				<p>SU DEDICACIÓN NO NEGOCIABLE A MISMO MISMO Y NUESTRO MAYOR POTENCIAL. ¡ES GRATITUD!</p>
			</article>
			<Button onClick={handleClick}>Add a bear</Button>
		</section>
	);
}
