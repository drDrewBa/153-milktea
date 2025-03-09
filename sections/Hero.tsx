'use client'

import { oswald } from "../app/fonts/fonts"
import { StaggeredImages } from '@/components/Stagger'
import HeroImg from '@/public/hero.png'
import CircleImg1 from '@/public/milktea-circle-1.png'
import CircleImg2 from '@/public/milktea-circle-2.png'
import CircleImg3 from '@/public/milktea-circle-3.png'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const images = [
	{ src: CircleImg1, alt: 'milk tea 1' },
	{ src: CircleImg2, alt: 'milk tea 2' },
	{ src: CircleImg3, alt: 'milk tea 3' },
];

const Hero = () => {
	return (
		<section className='pt-5 pb-20 md:pt-5 md:pb-10 overflow-x-hidden'>
			<div className='container'>
				<div className="flex flex-col md:flex-row-reverse items-center justify-center">
					<div className="relative md:h-[256px] md:flex-1 lg:h-[356px]">
						<motion.img
							src={HeroImg.src}
							alt="Milk tea and hamburger"
							className="md:absolute md:h-full md:w-auto md:max-w-none"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
						/>
						<motion.div 
							className="bg-blur absolute top-10 left-16 w-52 h-52 md:w-64 md:h-64 md:top-11 md:left-24 lg:w-80 lg:h-80 lg:top-14 lg:left-36"
							animate={{
								scale: [0.9, 1, 0.9],
								opacity: [0.1, 0.2, 0.3, 0.2, 0.1],
								x: [
									20 * Math.cos(0),
									20 * Math.cos(Math.PI / 4),
									20 * Math.cos(Math.PI / 2),
									20 * Math.cos((3 * Math.PI) / 4),
									20 * Math.cos(Math.PI),
									20 * Math.cos((5 * Math.PI) / 4),
									20 * Math.cos((3 * Math.PI) / 2),
									20 * Math.cos((7 * Math.PI) / 4),
									20 * Math.cos(2 * Math.PI),
								],
								y: [
									20 * Math.sin(0),
									20 * Math.sin(Math.PI / 4),
									20 * Math.sin(Math.PI / 2),
									20 * Math.sin((3 * Math.PI) / 4),
									20 * Math.sin(Math.PI),
									20 * Math.sin((5 * Math.PI) / 4),
									20 * Math.sin((3 * Math.PI) / 2),
									20 * Math.sin((7 * Math.PI) / 4),
									20 * Math.sin(2 * Math.PI),
								],
							}}
							transition={{
								duration: 7,
								repeat: Number.POSITIVE_INFINITY,
								ease: "linear",
							}}
						>
						</motion.div>
					</div>
					<div className="flex flex-col items-center md:w-[356px] lg:w-[478px]">
						<h1 className={twMerge(oswald.className, "header-hero")}>
							Your fave is <span className="text-secondary">back!</span>
						</h1>
						<button className="mt-5 btn-hero" type='button'>
							Order now!
						</button>
					</div>
				</div>
				<StaggeredImages className="mt-20" images={images} />
			</div>
		</section>
	)
}

export default Hero