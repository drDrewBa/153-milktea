'use client'

import React from 'react'
import Hamburger from '@/public/burger-main.png'
import CircleImg1 from '@/public/snack-circle-1.png'
import CircleImg2 from '@/public/snack-circle-2.png'
import CircleImg3 from '@/public/snack-circle-3.png'
import Buns from '@/public/buns.png'
import Lettuce from '@/public/lettuce.png'
import Patties from '@/public/patties.png'
import Cheese from '@/public/cheese.png'
import Image from 'next/image'
import IngredientCard from '@/components/IngredientCard'
import { StaggeredImages } from '@/components/Stagger'

const images = [
	{ src: CircleImg1, alt: 'curly fries' },
	{ src: CircleImg2, alt: 'french fries' },
	{ src: CircleImg3, alt: 'potato balls' },
];

const Snacks = () => {
	return (
		<section className='py-20 overflow-x-hidden'>
			<div className="container">
				<div className="flex flex-col items-center">
					<h2 className='header-section'>
						The best meals, <br />
						<span className='text-secondary'>affordable prices</span>
					</h2>
					<p className='mt-12 description'>
						Our delicious meals and snacks make the perfect partner for your drinks! Try out every 153 combo! 
					</p>
				</div>
				<div className='mt-10 relative flex justify-center'>
					<Image src={Hamburger} alt={'Hamburger'} height={800}/>
					<div className='hidden md:block'>
						<IngredientCard
							adjective={'toasty'}
							image={Buns}
							alt={'Buns'}
							description={'These buns are toasted to perfection, you’ll think the’yre fresh out of the oven!'}
							className='top-6 left-10 -rotate-12 lg:left-44'
						/>
						<IngredientCard
							adjective={'fresh'}
							image={Lettuce}
							alt={'Lettuce'}
							description={'Homegrown veggies is where it’s at! Savor freshness with each bite!'}
							className='top-20 right-10 rotate-12 lg:right-44'
						/>
						<IngredientCard
							adjective={'juicy'}
							image={Patties}
							alt={'Lettuce'}
							description={'We only use the BEST patties. Guaranteed beefy, guaranteed juicy, guaranteed delicious!'}
							className='top-80 left-20 rotate-12 lg:left-56'
						/>
						<IngredientCard
							adjective={'cheesy'}
							image={Cheese}
							alt={'Lettuce'}
							description={'Of course, don’t forget the gooey "melts-in-your-mouth" cheese! Careful, it’s HOT!'}
							className='top-96 right-14 -rotate-6 lg:right-48'
						/>
					</div>
				</div>
				<StaggeredImages className="mt-10" images={images} />
			</div>
		</section>
	)
}

export default Snacks