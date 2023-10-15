import React from 'react';
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher';
import { MoonIcon, SunIcon } from '@/components/Icons';
export default function DarkLightButton() {
	const [mode, setMode] = useThemeSwitcher();
	return (
		<button
			onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
			className={`ml-3 flex items-center justify-center rounded-full p-1
 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
`}
		>
			{mode === 'light' ? (
				<SunIcon className={'fill-dark'} />
			) : (
				<MoonIcon className={'fill-dark'} />
			)}
		</button>
	);
}
