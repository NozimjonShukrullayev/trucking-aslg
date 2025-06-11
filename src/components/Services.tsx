import { serviceFourImg, serviceOneImg, serviceThreeImg, serviceTwoImg } from '@/assets/images'
import { useTranslation } from 'react-i18next'

const Services = () => {
	const { t } = useTranslation()

	const services = [
		{
			id: 1,
			title: t('services.service1.title'),
			image: serviceOneImg,
			index: 0,
		},
		{
			id: 2,
			title: t('services.service2.title'),
			image: serviceTwoImg,
			index: 1,
		},
		{
			id: 3,
			title: t('services.service3.title'),
			image: serviceThreeImg,
			index: 2,
		},
		{
			id: 4,
			title: t('services.service4.title'),
			image: serviceFourImg,
			index: 3,
		},
	]

	return (
		<section className='py-16 bg-white' id='services'>
			<div className='container-custom'>
				<div className='grid grid-cols-12 gap-8'>
					<div className='col-span-12 lg:col-span-6 mb-8'>
						<h3 className='text-blue-600 font-medium mb-2'>
							{t('navigation.services')}
						</h3>
						<h2 className='text-4xl font-bold mb-6'>{t('services.title')}</h2>
					</div>
					<div className='col-span-12 lg:col-span-6 mb-8'>
						<p className='text-gray-700'>{t('services.description')}</p>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{services.map(service => (
						<div
							key={service.id}
							className='relative group overflow-hidden rounded-lg'
						>
							<img
								src={service.image}
								alt={service.title}
								className='w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6'>
								<h3 className='text-xl font-semibold text-white mb-2'>
									{service.title}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
