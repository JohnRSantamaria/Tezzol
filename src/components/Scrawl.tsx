import { Montserrat, Cedarville_Cursive } from 'next/font/google';

const cedarville = Cedarville_Cursive({
	subsets: ['latin'],
	variable: '--font-cedar',
	weight: '400',
});

interface ScrawlProps {
	children: React.ReactNode;
	className?: string;
}

export default function Scrawl({ children, className }: ScrawlProps) {
	return (
		<span
			className={`${cedarville.className} ${className} absolute text-primary leading-6 decoration-primary decoration-slice capitalize line-through `}
		>
			{children}
		</span>
	);
}
