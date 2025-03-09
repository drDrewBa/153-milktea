import React from 'react'
import Logo from '@/public/logo.png'
import Facebook from '@/public/facebook.svg'
import Instagram from '@/public/instagram.svg'
import Email from '@/public/email.svg'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='py-16'>
			<div className="container">
				<div className='flex flex-col justify-center items-center'>
					<Image src={Logo} alt={'153 Logo'} className='w-28'/>
					<div className='flex mt-10 gap-5 items-center'>
						<Facebook className="social-icon"/>
						<Instagram className="social-icon" />
						<Email className="w-11 h-11" />
					</div>
					<p className='text-sm text-white/50 mt-5'>
						&copy; 153 Milk Tea, 2024
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer