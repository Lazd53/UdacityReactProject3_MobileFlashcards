import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

function Test3(props){
  return (
    <View>
      <Text> Test3 </Text>
    </View>
  )
}

function Test4(props){
  return (
    <View styles={styles.container}>
      <Text> Test4 </Text>
    </View>
  )
}


export default function Test1() {
  return (
    <View style={styles.container}>
      <stack.Navigator initialRouteName="Test4">
        <stack.Screen name="ThisTest" component={Test3}/>
        <stack.Screen name="ThatTest" component={Test4}/>
      </stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
