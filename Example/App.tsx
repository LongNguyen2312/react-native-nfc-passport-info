import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scanNfc} from 'react-native-read-nfc-passport';

const MyComponent = () => {
  // documentNumber: Last 9 digits of CCCD
  // dateOfBirth: yymmdd
  // dateOfExpiry: yymmdd
  const onReadNfc = async () => {
    try {
      const data = await scanNfc({
        documentNumber: 'xxxxxxxxx',
        dateOfBirth: 'xxxxxx',
        dateOfExpiry: 'xxxxxx',
      });
      console.log('onReadNfc', data);
    } catch (error) {
      console.log('onReadNfc error', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onReadNfc}>
        <Text style={styles.txt}>Scan NFC</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default MyComponent;
