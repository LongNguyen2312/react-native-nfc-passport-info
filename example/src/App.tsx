import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  scanNfcAndroid,
  cancelScanNfcAndroid,
} from 'react-native-read-nfc-passport';

// documentNumber: Last 9 digits of cccd
// dateOfBirth: yymmdd
// dateOfExpiry: yymmdd

const readNfc = async () => {
  try {
    const data = await scanNfcAndroid({
      documentNumber: 'xxxxxxxxx',
      dateOfBirth: 'xxxxxx',
      dateOfExpiry: 'xxxxxx',
    });
    console.log('readPassport', data);
  } catch (error) {
    try {
      await cancelScanNfcAndroid();
    } catch (err) {
      console.log(err);
    }
  }
};

// create a component
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={readNfc}>
        <Text style={styles.txt}>Read NFC</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  txt: {
    color: 'white',
  },
});

export default App;
