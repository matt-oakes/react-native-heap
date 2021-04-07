# React Native Tests
This folder contains a React Native test app that demonstrates the library's API, and can be used to test changes to the library. By default, all heap requests are sent to `localhost:3000`.

## Building the TestDriver App
1. Run `npm install`.
2. Run `patch -p1 < React.podspec.patch`. When the prompt for a file name appears, enter `node_modules/react-native/React.podspec`.
3. Run `pod install`.
4. In the root directory of the `heap` repo, run `./node_modules/.bin/detox build -c ios.sim.debug`.

<!-- :TODO: (jmtaber129): Add instructions for how to modify the app to send requests to prod Heap. -->
