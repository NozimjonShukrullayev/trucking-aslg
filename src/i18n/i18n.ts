import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en/translation.json'
import kzTranslation from './locales/kz/translation.json'
import ruTranslation from './locales/ru/translation.json'
import zhTranslation from './locales/zh/translation.json'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: enTranslation,
			},
			ru: {
				translation: ruTranslation,
			},
			zh: {
				translation: zhTranslation,
			},
			kk: {
				translation: kzTranslation,
			},
		},
		fallbackLng: 'en',
		debug: false,
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
