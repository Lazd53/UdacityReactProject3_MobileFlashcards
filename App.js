// packages
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { setLocalNotification} from './utils/helpers'

import BottomTabNav from './navigation/BottomTabNav';
import reducers from './reducers';
import middleware from './middleware';

const store = createStore(reducers, middleware);

class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render(){
    return (
      <Provider store= { store }>
        <View style={styles.container}>
          <BottomTabNav />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
