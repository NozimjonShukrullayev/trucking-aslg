import { About1, About2, About3, AboutBackdrop } from '@/assets/images'
import { useTranslation } from 'react-i18next'

const BusinessSolution = () => {
	const { t } = useTranslation()

	const businesses = [
		{
			id: 'business1',
			href: About1,
			title: t('about.smallBusiness.title'),
			description: t('about.smallBusiness.description'),
		},
		{
			id: 'business2',
			href: About2,
			title: t('about.corporateClients.title'),
			description: t('about.corporateClients.description'),
		},
		{
			id: 'business3',
			href: About3,
			title: t('about.privateClients.title'),
			description: t('about.privateClients.description'),
		},
	]

	return (
		<section className='py-24 bg-white' id='about'>
			<img
				src={AboutBackdrop}
				alt='backdrop-img'
				className='absolute w-full h-full z-0'
			/>
			<div className='container-custom'>
				<div className='grid grid-cols-12 gap-6'>
					<div className='col-span-12 md:col-span-6 lg:col-span-5 z-20'>
						<div className='mb-6'>
							<h3 className='text-blue-600 font-medium mb-2'>
								{t('navigation.about')}
							</h3>
							<h2 className='text-4xl font-bold text-black mb-4'>
								{t('about.title')}
							</h2>
						</div>

						<div className='mb-10'>
							<p className='text-gray-700'>{t('about.description')}</p>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
					{businesses.map(business => (
						<div
							key={business.id}
							className='bg-white p-6 rounded-lg shadow-sm z-20'
						>
							<div className='w-16 h-16 rounded-lg flex items-center justify-center mb-4'>
								<img
									src={business.href}
									alt='Small Business'
									className='w-16 h-16'
								/>
							</div>
							<h3 className='text-xl font-bold mb-3'>{business.title}</h3>
							<p className='text-gray-600'>{business.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default BusinessSolution
