module.exports = {
  expo: {
    name: 'expo-template',
    slug: 'expo-template',
    scheme: 'expo-template',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    experiments: {
      tsconfigPaths: true,
    },
    plugins: ['expo-router'],
    extra: {
      eas: {
        projectId: '', // Add your EAS project ID here
      },
    },
    owner: 'bratislava',
  },
}
