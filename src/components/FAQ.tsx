import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
	const { t } = useTranslation()
	const [openIndex, setOpenIndex] = useState(0)

	const faqItems = [
		{
			question: t('faq.question1.question'),
			answer: t('faq.question1.answer'),
		},
		{
			question: t('faq.question2.question'),
			answer: t('faq.question2.answer'),
		},
		{
			question: t('faq.question3.question'),
			answer: t('faq.question3.answer'),
		},
		{
			question: t('faq.question4.question'),
			answer: t('faq.question4.answer'),
		},
		{
			question: t('faq.question5.question'),
			answer: t('faq.question5.answer'),
		},
		{
			question: t('faq.question6.question'),
			answer: t('faq.question6.answer'),
		},
		{
			question: t('faq.question7.question'),
			answer: t('faq.question7.answer'),
		},
		{
			question: t('faq.question8.question'),
			answer: t('faq.question8.answer'),
		},
	]

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? -1 : index)
	}

	return (
		<section className='py-16 bg-white'>
			<div className='container-custom'>
				<div className='grid grid-cols-12 gap-8'>
					<div className='col-span-12 lg:col-span-6 mb-8'>
						<h3 className='text-blue-600 font-medium mb-2'>{t('faq.title')}</h3>
						<h2 className='text-4xl font-bold mb-6'>{t('faq.title')}</h2>
					</div>
					<div className='col-span-12 lg:col-span-6 mb-8'>
						<p className='text-gray-700'>{t('faq.description')}</p>
					</div>
				</div>

				<div className='mt-8'>
					{faqItems.map((item, index) => (
						<div
							key={index}
							className='border-b border-gray-200 last:border-b-0'
						>
							<div
								className='py-5 flex justify-between items-center cursor-pointer'
								onClick={() => toggleFaq(index)}
							>
								<h3 className='text-lg font-medium'>{item.question}</h3>
								{openIndex === index ? (
									<ChevronUp className='h-5 w-5 text-gray-500' />
								) : (
									<ChevronDown className='h-5 w-5 text-gray-500' />
								)}
							</div>
							<div
								className={`overflow-hidden transition-all duration-300 ${
									openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
								}`}
							>
								<p className='text-gray-600'>{item.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FAQ
