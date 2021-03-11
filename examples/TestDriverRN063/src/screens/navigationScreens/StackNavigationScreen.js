"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackNavigationScreen = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var stack_1 = require("@react-navigation/stack");
var HomeStackScreen = function (_a) {
    var navigation = _a.navigation;
    return (<react_native_1.View>
      <react_native_1.Button title="Stack" onPress={function () { return navigation.push('Stack'); }}/>
      <react_native_1.Button title="Modal" onPress={function () { return navigation.navigate('Modal'); }}/>
    </react_native_1.View>);
};
var StackScreen = function (_a) {
    var navigation = _a.navigation;
    return (<react_native_1.Button title="Pop1" onPress={function () { return navigation.pop(); }}/>);
};
var ModalScreen = function (_a) {
    var navigation = _a.navigation;
    return (<react_native_1.Button title="Dismiss Modal" onPress={function () { return navigation.goBack(); }}/>);
};
var NavigationStack = stack_1.createStackNavigator();
var RootNavigationStack = stack_1.createStackNavigator();
var NestedStackNavigationScreen = function () {
    return (<NavigationStack.Navigator>
      <NavigationStack.Screen name="Home" component={HomeStackScreen}/>
      <NavigationStack.Screen name="Stack" component={StackScreen}/>
    </NavigationStack.Navigator>);
};
var StackNavigationScreen = function () {
    return (<RootNavigationStack.Navigator mode="modal">
      <NavigationStack.Screen name="Main" component={NestedStackNavigationScreen} options={{ headerShown: false }}/>
      <NavigationStack.Screen name="Modal" component={ModalScreen}/>
    </RootNavigationStack.Navigator>);
};
exports.StackNavigationScreen = StackNavigationScreen;
