declare module 'react-native-nfc-passport-info' {
  // documentNumber: Last 9 digits of CCCD
  // dateOfBirth: yymmdd
  // dateOfExpiry: yymmdd

  export function scanNfc(params: {
    documentNumber: string;
    dateOfBirth: string;
    dateOfExpiry: string;
  }): Promise<any>;

  // Only Android
  export function cancelScanNfc(): void;
}
