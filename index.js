import { NativeModules } from 'react-native';

const { RNDetectSoftwareNavigationBar } = NativeModules;

let isSoftware = false;

console.log('before', isSoftware);

RNDetectSoftwareNavigationBar.isSoftware(bool => isSoftware = bool);

console.log('after', isSoftware);

export default isSoftware;
