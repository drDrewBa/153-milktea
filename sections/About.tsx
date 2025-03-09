'use client'

import Location from '@/public/icon-location.png'
import Like from '@/public/icon-like.png'
import MilkTea from '@/public/icon-milktea.png'
import { StaggeredCard } from '@/components/Stagger'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const aboutContent = [
	{
		src: Location, alt: "Location",
		description: "Your local tea & snack house located at Brgy. Dajay in Surallah, South Cotabato.",
	},
	{
		src: MilkTea, alt: "Milk Tea",
		description: "We offer quality beverages, food, and service, all at a very affordable price!",
	},
	{
		src: Like, alt: "Like",
		description: "Your favorite snack hous. Our customers always come back for more!",
	},
]

const About = () => {

	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	const transalteY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	return (
		<section ref={ref} className='py-20'>
			<div className='container'>
				<h2 className='header-section'>
					153 is here to <br />
					<span className='text-secondary'>satisfy your cravings</span>
				</h2>
				<div className="relative mt-10 flex justify-center">
					<motion.div
						className='hidden md:block md:absolute md:bg-blur md:w-[576px] md:h-48 md:opacity-10 top-20'
						style={{ translateY: transalteY, }}
					>
					</motion.div>
					<StaggeredCard images={aboutContent} />
				</div>
			</div>
		</section>
	)
}

export default About