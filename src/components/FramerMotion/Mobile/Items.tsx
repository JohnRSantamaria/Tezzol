import * as React from 'react';
import { motion } from 'framer-motion';
import { initFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export type MenuItemProps = {
	id: string;
	text: string;
	icon: string;
};

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const MenuItem: React.FC<MenuItemProps> = ({ id, text, icon }) => {
	const router = useRouter();

	const app = initFirebase();
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const signIn = async () => {
		const result = await signInWithPopup(auth, provider);
		const user = result.user;

		if (user) {
			goToAccount();
		}
	};

	const goToAccount = () => {
		router.push('/account');
	};

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		const target = e.currentTarget.getAttribute('data-id'); // Accede al atributo personalizado 'data-id'
		if (target === '2') {
			signIn();
		}
	};

	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			className='flex items-center cursor-pointer list-none mb-5'
			onClick={handleClick}
			data-id={id}
		>
			<div className='flex mr-5 bg-light rounded-full border-2 p-2 '>
				<span className='flex items-center justify-center text-center text-2xl'>{icon}</span>
			</div>

			<div className='border-light w-48 px-2 '>
				<span className='text-light font-bold'>{text}</span>
			</div>
		</motion.li>
	);
};
