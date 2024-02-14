import '../global.css'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <SafeAreaView>
      <View className="h-full w-full items-center justify-center">
        <Text>Open up App.js to start working on your app!</Text>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

export default RootLayout
