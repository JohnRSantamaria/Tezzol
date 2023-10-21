import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Circle from '../../public/svg/circle';
import useStore from '@/store/useStore';
import { useBearStore } from '@/store/isAuthenticated';

export default function Video() {
	const bears = useStore(useBearStore, (state) => state.bears ?? 0);

	const handleClick = () => {
		useBearStore.setState({ bears: (bears ?? 0) + 1 });
	};

	return (
		<section className='relative flex items-center justify-center w-full h-screen py-4 border'>
			<h2 className='text-4xl text-green-600'>Bears: {bears}</h2>
			<button onClick={handleClick}>Add a bear</button>
			{/* <article className='w-full h-1/2 lg:w-4/5 lg:h-4/5 '>
				<ReactPlayer
					url='https://www.youtube.com/watch?v=bIddRS--ftE&list=RDbIddRS--ftE&start_radio=1'
					width={'100%'}
					height={'100%'}
					controls={false}
					key={'youtube'}
				/>
			</article> */}
		</section>
	);
}
