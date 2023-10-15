import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Cedarville_Cursive } from 'next/font/google';
import AuthRouter from './authRouter';
import Navbar from '@/components/Navbar';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
});

export const metadata: Metadata = {
	title: 'Stripe App Demo',
	description: 'Stripe and Firebase App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<body
				className={`${montserrat.variable}  font-mont bg-light dark:bg-dark text-dark dark:text-light `}
			>
				<AuthRouter>
					<Navbar />
					<div
						className='w-full min-h-screen
						flex flex-col justify-center items-center gap-4 '
					>
						{children}
					</div>
				</AuthRouter>
			</body>
		</html>
	);
}
