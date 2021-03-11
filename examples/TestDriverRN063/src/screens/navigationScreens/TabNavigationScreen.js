"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabNavigationScreen = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var Tab1 = function () {
    return <react_native_1.Text>Tab1</react_native_1.Text>;
};
var Tab2 = function () {
    return <react_native_1.Text>Tab2</react_native_1.Text>;
};
var Tab3 = function () {
    return <react_native_1.Text>Tab3</react_native_1.Text>;
};
var Tab = bottom_tabs_1.createBottomTabNavigator();
var TabNavigationScreen = function () {
    return (<Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1}/>
      <Tab.Screen name="Tab2" component={Tab2}/>
      <Tab.Screen name="Tab3" component={Tab3}/>
    </Tab.Navigator>);
};
exports.TabNavigationScreen = TabNavigationScreen;
