.PHONY: ios dependencies setup-react-native setup-ios

react-native-dependencies:
	npm i

ios-clean:
	cd ./ios && pod deintegrate

ios-dependencies: react-native-dependencies ios-clean
	cd ./ios && pod install

ios:
	xcodebuild -workspace ./ios/TestDriverRN064RC.xcworkspace -scheme TestDriverRN064RC -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build -showBuildTimingSummary build | xcpretty

dependencies: react-native-dependencies ios-dependencies