'use client'

import React from 'react'
import Image from 'next/image'
import Image1 from '@/public/image-1.jpg'
import Image2 from '@/public/image-2.jpg'
import Image3 from '@/public/image-3.jpg'
import Image4 from '@/public/image-4.jpg'
import Image5 from '@/public/image-5.jpg'
import { motion } from 'framer-motion'


const Gallery = () => {
	return (
		<section className="py-20">
			<div className="container">
				<div className="flex flex-col items-center">
					<h2 className='header-section'>
						The barkada's <br />
						<span className='text-secondary'>all-time favorite</span>
					</h2>
				</div>
				<div className="mt-10 flex gap-8 items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
					<motion.div
						className='flex gap-6 flex-none pr-6'
						animate={{
							translateX: "-50%",
						}}
						transition={{
							duration: 20,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'linear',
							repeatType: 'loop',
						}}
					>
						<Image 
							src={Image1} 
							alt={'Fruit tea sodas'} 
							className='gallery-img'
						/>
						<Image 
							src={Image2} 
							alt={'Green apple fruit tea soda'} 
							className='gallery-img'
						/>
						<Image 
							src={Image3} 
							alt={'153 milk tea customers'} 
							className='gallery-img'
						/>
						<Image 
							src={Image4} 
							alt={'153 tea house'} 
							className='gallery-img'
						/>
						<Image 
							src={Image5} 
							alt={'burger & fruit teas'} 
							className='gallery-img'
						/>

						<Image
							src={Image1}
							alt={'Fruit tea sodas'}
							className='gallery-img'
						/>
						<Image
							src={Image2}
							alt={'Green apple fruit tea soda'}
							className='gallery-img'
						/>
						<Image
							src={Image3}
							alt={'153 milk tea customers'}
							className='gallery-img'
						/>
						<Image
							src={Image4}
							alt={'153 tea house'}
							className='gallery-img'
						/>
						<Image
							src={Image5}
							alt={'burger & fruit teas'}
							className='gallery-img'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Gallery