import {
	Partners1,
	Partners10,
	Partners11,
	Partners2,
	Partners3,
	Partners4,
	Partners5,
	Partners6,
	Partners7,
	Partners8,
	Partners9,
} from '@/assets/images'
import { useTranslation } from 'react-i18next'

const Partners = () => {
	const { t } = useTranslation()

	const partners = [
		{
			name: 'RWest',
			logo: Partners7,
		},
		{
			name: 'RWest',
			logo: Partners8,
		},
		{
			name: 'RWest',
			logo: Partners9,
		},
		{
			name: 'RWest',
			logo: Partners10,
		},
		{
			name: 'RWest',
			logo: Partners11,
		},
		{
			name: 'RWest',
			logo: Partners1,
		},
		{
			name: 'Ansar Foods',
			logo: Partners2,
		},
		{
			name: 'TMD Group',
			logo: Partners3,
		},
		{
			name: 'Asian Development Company',
			logo: Partners4,
		},
		{
			name: 'Flow Energy',
			logo: Partners5,
		},
		{
			name: 'Flow Energy',
			logo: Partners6,
		},
		{
			name: 'Flow Energy',
			logo: Partners7,
		},
		{
			name: 'Flow Energy',
			logo: Partners8,
		},
		{
			name: 'Flow Energy',
			logo: Partners9,
		},
		{
			name: 'Flow Energy',
			logo: Partners10,
		},
		{
			name: 'Flow Energy',
			logo: Partners11,
		},
		{
			name: 'Flow Energy',
			logo: Partners1,
		},
		{
			name: 'Flow Energy',
			logo: Partners2,
		},
		{
			name: 'Flow Energy',
			logo: Partners3,
		},
		{
			name: 'Flow Energy',
			logo: Partners4,
		},
		{
			name: 'Flow Energy',
			logo: Partners5,
		},
		{
			name: 'Flow Energy',
			logo: Partners6,
		},
	]

	return (
		<section className='py-16 bg-blue-50'>
			<div className='container-custom overflow-hidden'>
				<h2 className='text-3xl font-bold mb-12 text-center'>
					{t('partners.title')}
				</h2>

				<div className='flex flex-nowrap justify-center items-center gap-8 md:gap-16 partners-wrapper'>
					{partners.map((partner, index) => (
						<div
							key={index}
							className='bg-white shrink-0 p-5 rounded-lg shadow-sm w-56 h-36 flex items-center justify-center partners-social'
						>
							<img
								src={partner.logo}
								alt={partner.name}
								className='max-w-full max-h-full object-contain'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Partners
