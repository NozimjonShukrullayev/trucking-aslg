import { Logo } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { t } = useTranslation()

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const links = [
		{ href: '/', label: t('navigation.home') },
		{ href: '/#about', label: t('navigation.about') },
		{ href: '/#services', label: t('navigation.services') },
		{ href: '/#partners', label: t('navigation.partners') },
		{ href: '/tariff', label: t('navigation.tariff') },
		{ href: '/vacancy', label: t('navigation.vacancies') },
		{ href: '/contact', label: t('navigation.contact') },
	]

	return (
		<header className='py-4 bg-[#1A1F2C] absolute top-0 left-0 w-full z-10'>
			<div className='container-custom'>
				<div className='flex justify-between items-center'>
					<div className='flex items-center'>
						<Link to='/' className='flex items-center'>
							<img src={Logo} alt='Logo' className='h-12 invert brightness-0' />
						</Link>
					</div>

					<div className='hidden md:flex items-center space-x-8'>
						<nav>
							<ul className='flex space-x-8'>
								{links.map(link => (
									<li key={link.label}>
										<Link
											to={link.href}
											className='text-white hover:text-blue-300 transition'
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<LanguageSelector />
					</div>

					<div className='md:hidden flex items-center'>
						<LanguageSelector />
						<Button
							variant='ghost'
							onClick={toggleMenu}
							className='text-white p-2'
						>
							{isMenuOpen ? <X /> : <Menu />}
						</Button>
					</div>
				</div>

				{isMenuOpen && (
					<div className='md:hidden mt-4 bg-[#222] rounded-lg p-4'>
						<nav>
							<ul className='space-y-4'>
								{links.map(link => (
									<li key={link.href}>
										<Link
											to={link.href}
											className='text-white hover:text-blue-300 block py-2'
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
