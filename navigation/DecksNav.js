import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// Screens

import AllDecks from '../screens/AllDecks';
import AddDeck from '../screens/AddDeck';
// FUTURE VERSION
// import EditDeck from '../screens/EditDeck';
// import DeleteDeck from '../screens/DeleteDeck';
import SingleDeck from '../screens/SingleDeck';
import AddCard from '../screens/AddCard';

const stack = createStackNavigator();



export default function DecksNav (props){
    return(
      <View style={styles.container}>
        <stack.Navigator initialRouteName="All Decks">
          <stack.Screen name="All Decks" component={AllDecks}/>
          <stack.Screen name="Single Deck" component={SingleDeck}/>
          <stack.Screen name="Add a Deck" component={AddDeck}/>
          <stack.Screen name="Add Card" component={AddCard}/>
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
