//node imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
//project
import Number from './components/NumberComponent';
import ReduxNumber from './components/ReduxNumberComponent';
import myStore from './redux/configureStore';

export default function App() {
  return (
    <Provider store={myStore}>
      <View style={styles.container}>
        <Number />
        <ReduxNumber />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
