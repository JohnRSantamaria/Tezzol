import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './Items';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const Items = [
	{ id: '0', text: 'Inicio', icon: '🏠' },
	{ id: '1', text: 'Blog', icon: 'ℹ️' },
	{ id: '2', text: 'Ingresar', icon: '💻' },
];

export const Navigation = () => (
	<motion.ul variants={variants} className='absolute p-6 top-24 w-56'>
		{Items.map((item) => (
			<MenuItem id={item.id} key={item.id} text={item.text} icon={item.icon} />
		))}
	</motion.ul>
);
