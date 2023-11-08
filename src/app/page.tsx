'use client';

import Video from '@/components/Video';
import BlogSlider from '../../BlogSlider';
import AboutMe from '@/components/AboutMe';
import Services from '@/components/Services';
import HeroImage from '@/components/HeroImage';
import MotivationalPhrases from '@/components/MotivationalPhrases';
import NavbarMobile from '@/components/FramerMotion/Mobile/Navbar';

export default function Home() {
	return (
		<>
			<HeroImage />
			<AboutMe />
			<MotivationalPhrases />
			{/*<Video />
			<Services />
			<BlogSlider />
			<NavbarMobile /> */}
		</>
	);
}
