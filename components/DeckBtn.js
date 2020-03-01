import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';


export default function DeckBtn ({DeckInfo}) {
  return (
    <View style = {styles.deck}>
      <Text> "Test"  </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: 125,
    position: "relative"
  },
  deck: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 175,
    width: 125,
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    borderRightWidth:3,
    borderBottomWidth: 3,
    borderRadius: 7,
    backgroundColor: '#fff',
    elevation: 20
  },
  deckName: {
    position: "absolute",

  }

});
