import { Instagram, Phone, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Logo from '@assets/Logo'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className='bg-[#1A1F2C] text-white'>
			<div className='container-custom pt-16 pb-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
					<div>
						<Link to='/' className='flex items-center'>
							<img src={Logo} alt='Logo' className='h-12 invert brightness-0' />
						</Link>
						<div className='h-px bg-white/20 w-full my-6'></div>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-6'>
							{t('footer.information')}
						</h3>
						<ul className='space-y-3'>
							<li>
								<a href='#' className='hover:text-blue-200 transition'>
									{t('navigation.about')}
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-200 transition'>
									{t('navigation.vacancies')}
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-200 transition'>
									{t('navigation.contact')}
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-200 transition'>
									{t('navigation.tariff')}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-6'>
							{t('footer.services')}
						</h3>
						<ul className='space-y-3'>
							<li>
								<a href='#' className='hover:text-blue-200 transition'>
									{t('footer.internationalFreight')}
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-200 transition'>
									{t('footer.cargoStorage')}
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-200 transition'>
									{t('footer.customsClearance')}
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-200 transition'>
									{t('footer.logisticsConsulting')}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-6'>
							{t('footer.contact')}
						</h3>
						<ul className='space-y-3'>
							<li className='flex items-center'>
								<Phone className='w-4 h-4 mr-2' />
								+7 775 337 85 95
							</li>
							<li>sultanbek.asilbek@gmail.com</li>
							<li>
								Republic of Kazakhstan, Almaty, Tulebaeva 38, Business Center
								Zhetysu, office 512
							</li>
						</ul>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/20'>
					<div>
						<p>{t('footer.allRightsReserved')}</p>
					</div>
					<div className='flex items-center justify-start md:justify-end gap-4'>
						<h4 className='text-sm font-medium'>{t('footer.followUs')}</h4>
						<a href='#' className='text-white hover:text-blue-200 transition'>
							<Instagram className='w-5 h-5' />
						</a>
						<a href='#' className='text-white hover:text-blue-200 transition'>
							<Send className='w-5 h-5' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
