"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchablesScreen = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var myRef = react_1.default.createRef();
var MyTextInput = function () {
    var _a = react_1.default.useState(), value = _a[0], onChangeText = _a[1];
    return (<react_native_1.TextInput ref={myRef} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={function (text) { return onChangeText(text); }} value={value}/>);
};
var TouchablesScreen = function () {
    return (<react_native_1.ScrollView>
      <react_native_1.Button title="Press me" onPress={function () { return console.log('pressed button'); }}/>
      <react_native_1.Button title="focus textinput" onPress={function () { return myRef.current.focus && myRef.current.focus(); }}/>
      <react_native_1.TouchableOpacity onPress={function () { return console.log('pressed touchable opacity'); }}>
        <react_native_1.Text>Touchable Opacity</react_native_1.Text>
      </react_native_1.TouchableOpacity>
      <react_native_1.Pressable onPress={function () { return console.log('pressed pressable'); }} onPressIn={function () { return console.log('pressed in pressable'); }}>
        <react_native_1.Text>Pressable</react_native_1.Text>
      </react_native_1.Pressable>
      <MyTextInput />
    </react_native_1.ScrollView>);
};
exports.TouchablesScreen = TouchablesScreen;
