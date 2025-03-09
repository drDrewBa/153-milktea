import { luckiestGuy} from '@/app/fonts/fonts'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

interface IngredientCardProps {
	adjective: string,
	image: StaticImageData,
	alt: string,
	description: string,
	className?: string,
}

const IngredientCard: React.FC<IngredientCardProps> = ({ adjective, image, alt, description, className }) => {
	return (
		<div className={twMerge(className, 'absolute w-48 p-4')}>
			<div className="relative">
				<h3 className={twMerge(luckiestGuy.className, 'ingredient-adj')}>{adjective}</h3>
				<div className='ingredient-card absolute top-9'>
					<Image src={image} alt={alt} width={128} className='rounded-lg'/>
					<p className='mt-4 ingredient-desc'>{description}</p>
				</div>
			</div>
		</div>
	)
}

export default IngredientCard