import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';
import AboutCard from './AboutCard';

type ImageProps = {
	src: StaticImageData;
	alt: string;
	description?: string;
};

interface StaggeredProps {
	images: ImageProps[],
	className?: string,
};

const staggerContainer = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export function StaggeredImages({ images, className }: StaggeredProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			className={twMerge(className, "flex gap-5 items-center justify-center")}
			initial="hidden"
			animate={isInView ? "show" : "hidden"}
			variants={staggerContainer}
		>
			{images.map((img, index) => (
				<motion.div key={index} variants={fadeInUp}>
					<Image src={img.src} alt={img.alt} className="circle-img-sm" />
				</motion.div>
			))}
		</motion.div>
	);
}

export function StaggeredCard({ images, className }: StaggeredProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "show" : "hidden"}
			variants={staggerContainer}
		>
			<div className='flex flex-col gap-10 items-center justify-center md:flex-row'>
				{images.map((img, index) => (
					<motion.div key={index} variants={fadeInUp}>
						<AboutCard images={img}/>
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}