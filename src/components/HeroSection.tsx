import { HeroImg } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTranslation } from 'react-i18next'

const HeroSection = () => {
	const { t } = useTranslation()

	return (
		<section className='py-20 pt-32 relative'>
			<div className='container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
				<div className='order-1 lg:order-1'>
					<img
						src={HeroImg}
						alt='Logistics'
						loading='lazy'
						className='w-full h-auto rounded-lg'
					/>
				</div>
				<div className='order-2 lg:order-2'>
					<h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						{t('hero.title')}
					</h1>

					<div className='mt-8'>
						<h2 className='text-2xl font-bold text-white mb-6'>
							{t('hero.calculate')}
						</h2>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
							<Input
								type='text'
								placeholder={t('hero.from')}
								className='bg-white text-black h-12'
							/>
							<Input
								type='text'
								placeholder={t('hero.to')}
								className='bg-white text-black h-12'
							/>
						</div>

						<div className='mb-4'>
							<Input
								type='text'
								placeholder={t('hero.cargoDescription')}
								className='bg-white text-black h-12'
							/>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
							<Input
								type='text'
								placeholder={t('hero.yourName')}
								className='bg-white text-black h-12'
							/>
							<Input
								type='text'
								placeholder={t('hero.yourPhone')}
								className='bg-white text-black h-12'
							/>
						</div>

						<Button className='w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg'>
							{t('hero.calculateButton')}
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
