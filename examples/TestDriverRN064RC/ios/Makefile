.PHONY: all dependencies clean

XCODE = xcodebuild -workspace ./TestDriverRN064RC.xcworkspace

clean:
	pod deintegrate

dependencies: clean
	pod install
	$(XCODE) -scheme Pods-TestDriverRN064RC clean
	$(XCODE) -scheme TestDriverRN064RC clean

all:
	$(XCODE) -scheme Pods-TestDriverRN064RC -configuration Debug -derivedDataPath ./build | xcpretty
	$(XCODE) -scheme TestDriverRN064RC -configuration Debug -sdk iphonesimulator -derivedDataPath ./build | xcpretty