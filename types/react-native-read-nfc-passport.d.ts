declare module 'react-native-read-nfc-passport' {
  export function scanNfcAndroid(params: {
    documentNumber: string;
    dateOfBirth: string;
    dateOfExpiry: string;
    quality?: number;
  }): Promise<any>;

  export function cancelScanNfcAndroid(): void;

  export function scanNfcIos(params: {
    documentNumber: string;
    dateOfBirth: string;
    dateOfExpiry: string;
  }): void;
}
