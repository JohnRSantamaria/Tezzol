import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}
export default function Button({ children, className, onClick }: ButtonProps) {
	return (
		<button className={`${className} border px-8 py-4 bg-primary rounded-lg `} onClick={onClick}>
			{children}
		</button>
	);
}
