import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import AuthRouter from './authRouter';

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
		<html lang='en'>
			<body className={montserrat.variable}>
				<AuthRouter>
					<div
						className='w-full h-screen bg-light dark:bg-dark text-white 
						flex flex-col justify-center items-center gap-4 font-'
					>
						<div className='-mt-24' />
						{children}
					</div>
				</AuthRouter>
			</body>
		</html>
	);
}
