'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface CustomLinkProps {
	href: string;
	title: string;
	className?: string;
}

export default function CustomLink({ href, title, className = '' }: CustomLinkProps) {
	const pathName = usePathname();
	return (
		<Link href={href} className={`${className} relative group text-light `}>
			{title}

			<span
				className={`
            h-[2px] inline-block bg-primary
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${pathName === href ? 'w-full' : 'w-0'}`}
			>
				&nbsp;
			</span>
		</Link>
	);
}
