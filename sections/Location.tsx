'use client'

import Map from '@/components/Map'
import React from 'react'
import Arrow from '@/public/arrow.png'
import Stars from '@/public/stars.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Location = () => {
	return (
		<section className="py-20">
			<div className="container">
				<div className="flex flex-col items-center">
					<h2 className='header-section'>
						Whatcha waitin' for? <br />
						<span className='text-secondary'>Come visit now!</span>
					</h2>
				</div>
				<div className='m-10 relative flex justify-center'>
					<Image src={Arrow} alt={'Arrow'} 
						className='arrow top-24 -left-6 -rotate-[35deg] lg:top-40'
					/>
					<Image src={Arrow} alt={'Arrow'} 
						className='arrow top-24 -right-6 rotate-[142deg] lg:top-36' 
					/>
					<div className='border-4 border-secondary rounded-2xl'><Map /></div>
				</div>
				<div className='flex flex-col items-center'>
					<p className='mt-5 description'>
						We are open from 8AM to 6PM on weekdays and 10AM to 8PM on weekends.
					</p>
				</div>
				<div className='mt-20 relative flex justify-center'>
					<motion.div 
						className="bg-blur absolute opacity-10 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
						animate={{
							opacity: [0.1, 0.2, 0.2, 0.1],
							x: [
								15 * Math.cos(0),
								15 * Math.cos(Math.PI / 4),
								15 * Math.cos(Math.PI / 2),
								15 * Math.cos((3 * Math.PI) / 4),
								15 * Math.cos(Math.PI),
								15 * Math.cos((5 * Math.PI) / 4),
								15 * Math.cos((3 * Math.PI) / 2),
								15 * Math.cos((7 * Math.PI) / 4),
								15 * Math.cos(2 * Math.PI),
							],
							y: [
								15 * Math.sin(0),
								15 * Math.sin(Math.PI / 4),
								15 * Math.sin(Math.PI / 2),
								15 * Math.sin((3 * Math.PI) / 4),
								15 * Math.sin(Math.PI),
								15 * Math.sin((5 * Math.PI) / 4),
								15 * Math.sin((3 * Math.PI) / 2),
								15 * Math.sin((7 * Math.PI) / 4),
								15 * Math.sin(2 * Math.PI),
							],
						}}
						transition={{
							duration: 7,
							repeat: Infinity,
							ease: "linear",
						}}
					>
					</motion.div>
					<Image src={Stars} alt={'Stars'} className='w-64 md:w-80 lg:w-96' />
				</div>
			</div>
		</section>
	)
}

export default Location