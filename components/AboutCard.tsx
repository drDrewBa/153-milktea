import Image, { StaticImageData } from 'next/image';
import React from 'react'

type ImageProps = {
	src: StaticImageData;
	alt: string;
	description?: string;
};

interface AboutCardProps {
	images: ImageProps,
}

const AboutCard: React.FC<AboutCardProps> = ({ images }) => {
	return (
		<div className='about-card'>
			<div className='flex flex-col items-center'>
				<Image src={images.src} alt={images.alt} width={64} height={64}/>
				<p className='mt-10 about-desc'>{images.description}</p>
			</div>
		</div>
	)
}

export default AboutCard