import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import sk from './translations/sk.json'
import { environment } from './environment'

const resources = {
  sk: {
    translation: sk,
  },
}

i18n
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'sk',
    debug: environment.deployment === 'development',
  })


// Exported like this for easier usage outside components without useTranslation hook
export const { t } = i18n

export default i18n
