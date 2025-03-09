'use client'

import React from 'react'
import Chocolate from '@/public/drink-1.png'
import CnC from '@/public/drink-2.png'
import Mango from '@/public/drink-3.png'
import Matcha from '@/public/drink-4.png'
import RedVelvet from '@/public/drink-5.png'
import GreenApple from '@/public/drink-6.png'
import StrawberryLemon from '@/public/drink-7.png'
import { motion } from 'framer-motion'


const Drinks = () => {
	return (
		<section className='py-20'>
			<div className="container">
				<div className="flex flex-col items-center">
					<h2 className='header-section'>
						It's getting hot, <br />
						<span className='text-secondary'>quench your thirst</span>
					</h2>
					<p className='mt-12 description'>
						You can always try out something new with our deliciously varied selection of milk teas and fruit tea sodas!
					</p>
				</div>
				<div className="mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
					<motion.div
						className='flex flex-none'
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
						<motion.img 
							src={Chocolate.src}
							alt={'Chocolate milk tea'}
							className='ticker-img'
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img
							src={CnC.src}
							alt={'CnC milk tea'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img
							src={Mango.src}
							alt={'Mango milk tea'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img
							src={Matcha.src}
							alt={'Matcha milk tea'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img
							src={RedVelvet.src}
							alt={'Red Velvet milk tea'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img
							src={GreenApple.src}
							alt={'Green Apple fruit tea soda'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img
							src={StrawberryLemon.src}
							alt={'Strawberry Lemon fruit tea soda'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>

						<motion.img 
							src={Chocolate.src}
							alt={'Chocolate milk tea'}
							className='ticker-img'
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img 
							src={CnC.src} 
							alt={'CnC milk tea'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img 
							src={Mango.src} 
							alt={'Mango milk tea'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img 
							src={Matcha.src} 
							alt={'Matcha milk tea'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img 
							src={RedVelvet.src} 
							alt={'Red Velvet milk tea'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img 
							src={GreenApple.src} 
							alt={'Green Apple fruit tea soda'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
						<motion.img 
							src={StrawberryLemon.src} 
							alt={'Strawberry Lemon fruit tea soda'} 
							className='ticker-img' 
							whileHover={{ scale: 1.1 }} 
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Drinks