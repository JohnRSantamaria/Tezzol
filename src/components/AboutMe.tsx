import React from 'react';
import AnimatedText from './AnimatedText';
import Scrawl from './Scrawl';

export default function AboutMe() {
	return (
		<section className='relative flex flex-col items-center gap-4 h-screen w-full bg-light text-dark overflow-hidden pt-20'>
			<AnimatedText text='Mi historia' />
			<section>
				<article className=''>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut a delectus corrupti
					atque sequi reiciendis voluptate dolorem vel eaque, ratione doloremque? Consequatur
					provident et quo qui rerum ducimus fugiat? Provident nulla autem veniam illum repudiandae
					pariatur illo debitis exercitationem tenetur laudantium alias suscipit quibusdam amet
					itaque accusantium, adipisci temporibus dolor magni! Magni, asperiores? Veritatis placeat
					numquam provident voluptate sapiente. Cumque, doloribus, neque itaque magni, nulla
					inventore laudantium quidem vel odit facilis obcaecati. Saepe ducimus numquam soluta iure
					veniam magni nobis excepturi maxime repellendus. Possimus natus dicta illo reiciendis
					iusto. Vitae dolor dicta reiciendis veniam tempore asperiores sapiente aliquam
					voluptatibus a deleniti praesentium blanditiis, esse eveniet fuga ex officia. Facilis
					deserunt aperiam nam accusamus officiis velit labore, nihil ullam minima. Dolor quibusdam
					error fugit provident sed iusto quae quas temporibus, laboriosam expedita saepe,
					reprehenderit perferendis tempora possimus laudantium ipsa a? Voluptatibus consectetur,
					ducimus similique harum dolorum sint! Sit, cupiditate id? Odio ad debitis similique
					distinctio expedita hic, nostrum accusantium temporibus itaque exercitationem quaerat sunt
					ipsam corrupti odit commodi nihil alias modi rem architecto. Non necessitatibus maiores
					natus tempora delectus. Asperiores. Maxime voluptatibus repellat, illum error neque
					necessitatibus aliquid culpa placeat molestiae dolorem velit unde non totam expedita
					facilis, deleniti ut. Deserunt ipsum eius mollitia placeat sed, nobis minima vitae ullam.
					Quidem ratione non ipsa aut aliquam tenetur nostrum! Minima aliquam alias dolores
					voluptatibus veniam assumenda reprehenderit quidem nemo doloremque deserunt accusantium
					aliquid, ullam quod. Quas qui consectetur eaque ratione quod. Itaque voluptatem
					voluptatibus aliquam deleniti nobis, fugit, tempore velit quasi amet ad maiores, ea quam
					modi neque officia quibusdam? Mollitia repellendus iure id doloremque delectus dolor ad
					laudantium eaque nisi. Facilis architecto illum corporis, accusamus sapiente modi
					obcaecati consequuntur, ex laudantium eum provident, debitis quae nisi dolorum impedit
					vel? Neque, voluptate eligendi expedita eveniet labore recusandae nesciunt officia ad
					nemo? Alias est esse at consequuntur, voluptatum nesciunt cum excepturi magnam nisi
					asperiores fuga, recusandae voluptas repudiandae nemo veritatis velit fugiat eius
					accusantium tempore quae minus. Dolores ab dolorem minima est? Consectetur, cupiditate
					cumque ea, fugiat iure voluptates at aspernatur quidem natus laudantium debitis
					perferendis autem rerum adipisci voluptate nulla facere excepturi? Dolores nulla, ad esse
					quibusdam explicabo aliquam vel. Commodi. Exercitationem earum atque quis facilis iure
					quae, modi aperiam ratione fugit tempora. Aperiam explicabo consequuntur earum reiciendis
					iure. Odit est accusantium repudiandae impedit voluptatem necessitatibus ullam odio! Illo,
					perferendis amet? Eius, sed? Minus fuga atque quisquam, totam eaque repellat iusto nostrum
					inventore provident ipsum, enim, quasi mollitia rem distinctio facilis praesentium
					voluptates officia? Similique totam veritatis animi! Rem, fugit laboriosam. Dignissimos,
					laudantium corporis. Rerum iste animi quasi pariatur ducimus? Odio obcaecati aperiam
					distinctio et. At vero quis aut totam sunt tempore earum eum aliquid! Non provident rerum
					soluta illo dolorem! Vitae fuga similique cum, cumque ratione quas laudantium impedit vero
					suscipit labore facilis corporis voluptatibus laborum aliquam. Dolorum quaerat commodi
					labore eligendi possimus eos eaque? Nemo voluptas excepturi sed ab.
				</article>
				<Scrawl className='top-44 text-lg left-20 -rotate-45 '>no eres nada</Scrawl>
				<Scrawl className='bottom-32 text-lg right-0 rotate-90'>nunca tendre nada</Scrawl>
				<Scrawl className='bottom-44 text-lg left-0 rotate-45'>Es muy dificil emprender</Scrawl>
				<Scrawl className='top-32 text-lg right-20 -rotate-90'>no tengo tiempo</Scrawl>
				<Scrawl className='top-44 text-lg left-1/2 '>Esta es la vida que nos toco</Scrawl>
			</section>
		</section>
	);
}
