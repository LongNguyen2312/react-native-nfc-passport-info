import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-read-nfc-passport' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ReadNfcPassport = NativeModules.ReadNfcPassport
  ? NativeModules.ReadNfcPassport
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return ReadNfcPassport.multiply(a, b);
}
