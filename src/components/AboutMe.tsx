import React from 'react';
import AnimatedText from './AnimatedText';
import Scrawl from './Scrawl';
import Circle from '../../public/svg/circle';

export default function AboutMe() {
	return (
		<section className='flex flex-col items-center gap-4 h-screen w-full bg-light text-dark overflow-hidden'>
			<AnimatedText text='Mi historia' />
			<section className='relative container flex flex-wrap flex-col md:flex-row px-4 min-h-fit'>
				<figcaption className='text-center md:w-1/2 '>Image</figcaption>
				<div className='md:w-1/2 pl-4 border-l-2 border-primary  '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut a delectus corrupti
					atque sequi reiciendis voluptate dolorem vel eaque, ratione doloremque? Consequatur
					provident et quo qui rerum ducimus fugiat? Provident nulla autem veniam illum repudiandae
					pariatur illo debitis exercitationem tenetur laudantium alias suscipit quibusdam amet
					itaque accusantium, adipisci temporibus dolor magni! Magni, asperiores? Veritatis placeat
					numquam provident voluptate sapiente. Cumque, doloribus, neque itaque magni, nulla
					inventore laudantium quidem vel odit facilis obcaecati. Saepe ducimus numquam soluta iure
					Lorem ipsum dolor sit
				</div>
				{/* <Scrawl className='top-56 text-lg left-[16%] -rotate-45 '>no eres nada</Scrawl>
				<Scrawl className='bottom-1/2 text-lg right-[14%] rotate-90'>nunca tendre nada</Scrawl>
				<Scrawl className='bottom-1/3 text-lg left-1/4 rotate-45'>Es muy dificil emprender</Scrawl>
				<Scrawl className='bottom-1/3 text-lg right-1/2 rotate-12'>no tengo tiempo</Scrawl>
			<Scrawl className='top-44 text-lg left-1/2 '>Esta es la vida que nos toco</Scrawl> */}
			</section>
		</section>
	);
}
