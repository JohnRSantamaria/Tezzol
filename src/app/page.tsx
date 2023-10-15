'use client';

import AboutMe from '@/components/AboutMe';
import HeroImage from '@/components/HeroImage';
import Services from '@/components/Services';
import Video from '@/components/Video';
import BlogSlider from '../../BlogSlider';
import MotivationalPhrases from '@/components/MotivationalPhrases';

export default function Home() {
	return (
		<>
			<HeroImage />
			<AboutMe />
			<MotivationalPhrases />
			<Video />
			<Services />
			<BlogSlider />
		</>
	);
}
