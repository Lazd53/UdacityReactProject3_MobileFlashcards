// packages
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import BottomTabNav from './navigation/BottomTabNav';
import reducers from './reducers';
import middleware from './middleware';

const store = createStore(reducers, middleware);

export default function App() {
    return (
      <Provider store= { store }>
        <View style={styles.container}>
          <BottomTabNav />
        </View>
      </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
