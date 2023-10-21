import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
	text: string;
	className?: string;
}

export default function AnimatedText({
	text,
	className = '',
}: AnimatedTextProps): React.ReactElement {
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	const quote = {
		initial: {
			opacity: 1,
		},
		animate: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.08,
			},
		},
	};

	const singelWord = {
		initial: {
			opacity: 0,
			y: 50,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
			<motion.h1
				ref={ref}
				className={`inline-block w-full text-dark font-bold capitalize text-4xl md:text-5xl lg:text-8xl py-4 ${className}`}
				variants={quote}
				initial='initial'
				animate={inView ? 'animate' : 'initial'}
			>
				{text.split(' ').map((word, index) => (
					<motion.span key={word + '-' + index} className='inline-block' variants={singelWord}>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
}
