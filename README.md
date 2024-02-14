# expo-template

Starting template for expo mobile app development under the city of Bratislava.
In general, follow https://docs.expo.dev/, below are some quick references.

## Connection with Expo

- You have to install eas-cli to connect and build project

```bash
npm install --global eas-cli
```

- Afterwards initiate

```bash
eas init --id {ID}
```

## Develop

We are using eas-development builds - read more here https://docs.expo.dev/develop/development-builds/introduction/

Quick reference:

```bash
# you'll want eas-cli installed globally
# install local packages
yarn

# local development once you have build installed and are changing only javascript
yarn start

# list existing builds (most of the time, you'll install the latest matching from here)
east build:list

# Android emulator or device build
eas build --profile development --platform android

# iOs simulator build
eas build --profile development-simulator --platform ios

# iOs device build
eas build --profile development --platform ios

# register new iOs device
eas device:create
```

## Deploy

### Build

Follow https://docs.expo.dev/deploy/build-project/

Quick reference:

```bash
eas build --platform all

# optionally, by platform
eas build --platform android
eas build --platform ios
```

### Release - Android

https://docs.expo.dev/deploy/submit-to-app-stores/

```bash
eas submit -p android
```

### Release - iOs

https://docs.expo.dev/deploy/submit-to-app-stores/

```bash
eas submit -p ios
```

## Environment variables

Public ones available in the final frontend package go to `.env` prefixed with `EXPO_PUBLIC_`. Access them using `environment.ts`. Secrets go to Expo secrets (and are afterwards available in app.config.js - and probably elsewhere - as environment variables) - see Expo secrets docs.
