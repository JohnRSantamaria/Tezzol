import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTitleProps {
	title: string;
}

export default function AnimatedTitle({ title }: AnimatedTitleProps) {
	const text = title;

	const ctrls = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			ctrls.start('visible');
		}
		if (!inView) {
			ctrls.start('hidden');
		}
	}, [ctrls, inView]);

	const wordAnimation = {
		hidden: {},
		visible: {},
	};

	const characterAnimation = {
		hidden: {
			opacity: 0,
			y: `0.25em`,
		},
		visible: {
			opacity: 1,
			y: `0em`,
			transition: {
				duration: 1,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};

	return (
		<span aria-label={text} role='heading' className='text-6xl font-semibold'>
			{text.split(' ').map((word, index) => {
				return (
					<motion.span
						ref={ref}
						aria-hidden='true'
						key={index}
						initial='hidden'
						animate={ctrls}
						variants={wordAnimation}
						transition={{
							delayChildren: index * 0.25,
							staggerChildren: 0.05,
						}}
						className='inline-block whitespace-nowrap '
					>
						{word.split('').map((character, index) => {
							return (
								<motion.span
									aria-hidden='true'
									key={index}
									variants={characterAnimation}
									className='inline-block '
								>
									{character}
								</motion.span>
							);
						})}
					</motion.span>
				);
			})}
		</span>
	);
}
