import React from 'react';

interface svgPropsInterface {
	className?: string;
	stopColor?: string;
}

const Circle: React.FC<svgPropsInterface> = ({ className }) => {
	return (
		<svg
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width='406'
			height='406'
			viewBox='0 1 406 406'
			preserveAspectRatio='xMidYMid meet'
			className={`${className} bg-transparent`}
			zoomAndPan='magnify'
		>
			<g id='change1_1'>
				<path
					d='M203,406C91.1,406,0,314.9,0,203S91.1,0,203,0s203,91.1,203,203S314.9,406,203,406z M203,3C92.7,3,3,92.7,3,203 s89.7,200,200,200s200-89.7,200-200S313.3,3,203,3z'
					fill='#e21135'
				/>
			</g>
		</svg>
	);
};
export default Circle;
