import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Advantages = () => {
	const { t } = useTranslation()

	const advantages = [
		{
			id: '01',
			title: t('advantages.advantage1.title'),
			description: t('advantages.advantage1.description'),
		},
		{
			id: '02',
			title: t('advantages.advantage2.title'),
			description: t('advantages.advantage2.description'),
		},
		{
			id: '03',
			title: t('advantages.advantage3.title'),
			description: t('advantages.advantage3.description'),
		},
		{
			id: '04',
			title: t('advantages.advantage4.title'),
			description: t('advantages.advantage4.description'),
		},
		{
			id: '05',
			title: t('advantages.advantage5.title'),
			description: t('advantages.advantage5.description'),
		},
		{
			id: '06',
			title: t('advantages.advantage6.title'),
			description: t('advantages.advantage6.description'),
		},
	]

	return (
		<section className='py-20 sm:py-32 bg-gray-50'>
			<div className='container-custom'>
				<div className='grid grid-cols-12 gap-8'>
					<div className='col-span-12 lg:col-span-6 mb-8'>
						<h3 className='text-blue-600 font-medium mb-2'>
							{t('advantages.title')}
						</h3>
						<h2 className='text-4xl font-bold mb-6'>{t('advantages.title')}</h2>
						<p className='text-gray-700'>{t('advantages.description')}</p>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
					{advantages.map(advantage => (
						<div
							key={advantage.id}
							className={`p-6 rounded-lg flex flex-col h-full bg-blue-50 text-gray-700 hover:bg-blue-600 hover:text-white duration-200`}
						>
							<div className='flex justify-between items-start mb-8'>
								<div className='text-4xl font-bold'>{advantage.id}</div>
								<ArrowUpRight className='h-6 w-6' />
							</div>
							<h3 className={`text-xl font-bold mb-4`}>{advantage.title}</h3>
							<p>{advantage.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Advantages
