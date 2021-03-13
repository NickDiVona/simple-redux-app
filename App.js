// imports from node_modules
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
// imports from user created files
import Number from './components/NumberComponent';
import ReduxNumber from './components/ReduxNumberComponent';
import myStore from './redux/configureStore';

// set up and export our root component, App
// use the Provider tag to wrap our entire App's contents
// use the attribute "store" on provider and supply it with the store imported from your conigure store file
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

// set up the stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
