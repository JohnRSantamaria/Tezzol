import React from 'react';
import Button from './Button';
import { rightArrow } from './Icons';
import { initFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignInButton() {
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

	return (
		<Button
			onClick={signIn}
			className='border-2 font-medium border-primary hover:bg-light dark:hover:bg-dark hover:text-primary px-8 py-4 bg-primary rounded-lg'
		>
			<div className='flex gap-2 items-center align-middle'>Ingresa con google {rightArrow}</div>
		</Button>
	);
}
