"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationStackScreen = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var stack_1 = require("@react-navigation/stack");
var StackNavigationScreen_1 = require("./navigationScreens/StackNavigationScreen");
var TabNavigationScreen_1 = require("./navigationScreens/TabNavigationScreen");
var NavigationScreen = function (_a) {
    var navigation = _a.navigation;
    return (<react_native_1.ScrollView>
      <react_native_1.Button title="Navigation - Tabs" onPress={function () { return navigation.push('TabNavigation'); }}/>
      <react_native_1.Button title="Navigation - Stack" onPress={function () { return navigation.push('StackNavigation'); }}/>
      <react_native_1.Button title="Navigation - Drawer" onPress={function () { return navigation.push('DrawerNavigation'); }}/>
    </react_native_1.ScrollView>);
};
var DrawerNavigationScreen = function (_a) {
    var navigation = _a.navigation;
    return (<react_native_1.Text>TODO</react_native_1.Text>);
};
var NavigationStack = stack_1.createStackNavigator();
var NavigationStackScreen = function () {
    return (<NavigationStack.Navigator>
      <NavigationStack.Screen name="NavigationHome" component={NavigationScreen}/>
      <NavigationStack.Screen name="TabNavigation" component={TabNavigationScreen_1.TabNavigationScreen}/>
      <NavigationStack.Screen name="StackNavigation" component={StackNavigationScreen_1.StackNavigationScreen}/>
      <NavigationStack.Screen name="DrawerNavigation" component={DrawerNavigationScreen}/>
    </NavigationStack.Navigator>);
};
exports.NavigationStackScreen = NavigationStackScreen;
