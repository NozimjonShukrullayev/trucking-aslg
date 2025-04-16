import { England, Kazkhstan, Kitay, Russian } from '@/assets/images'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	const languages = [
		{ code: 'en', name: 'English', flag: England },
		{ code: 'ru', name: 'Русский', flag: Russian },
		{ code: 'kz', name: 'Қазақша', flag: Kazkhstan },
		{ code: 'zh', name: '中文', flag: Kitay },
	]

	const currentLanguage =
		languages.find(lang => lang.code === i18n.language) || languages[0]

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' className='p-1 text-white'>
					<img
						src={currentLanguage.flag}
						alt={`${currentLanguage.name} flag`}
						className='hidden md:inline aspect-square w-7 rounded-full'
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='bg-white/10 backdrop-blur-xl border-white/10'
			>
				{languages.map(language => (
					<DropdownMenuItem
						key={language.code}
						onClick={() => changeLanguage(language.code)}
						className='text-white hover:bg-white/20 cursor-pointer'
					>
						<img
							className='mr-2 aspect-square w-7 rounded-full'
							src={language.flag}
							alt={language.name}
						/>
						{language.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageSelector
