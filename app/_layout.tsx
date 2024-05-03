import '../global.css'
import '../i18n.config.js'

import { StatusBar } from 'expo-status-bar'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, Text, View } from 'react-native'

const RootLayout = () => {
  const { t } = useTranslation()

  return (
    <SafeAreaView>
      <View className="h-full w-full items-center justify-center">
        <Text>{t('root.heading')}</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

export default RootLayout
