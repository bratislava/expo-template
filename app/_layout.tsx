import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View } from 'react-native'
import '../global.css'

const RootLayout = () => {
  return (
    <SafeAreaView>
      <View className="h-full w-full items-center justify-center">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

export default RootLayout
