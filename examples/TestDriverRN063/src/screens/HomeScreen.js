"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeScreen = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var HomeScreen = function (_a) {
    var navigation = _a.navigation;
    return (<react_native_1.ScrollView>
      <react_native_1.Button title="Touchables" onPress={function () { return navigation.navigate('Touchables'); }} onLongPress={function () { return console.log('long press'); }}/>
      <react_native_1.Button title="Navigation" onPress={function () { return navigation.navigate('Navigation'); }}/>
    </react_native_1.ScrollView>);
};
exports.HomeScreen = HomeScreen;
