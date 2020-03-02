import React from 'react';
import { View, Button, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';


export default function DeckBtn ({DeckInfo}) {

  return (
    <TouchableWithoutFeedback onPress={()=> alert('This got pressed')}>
      <View style = {styles.deck}>
        <Text style={styles.deckName}> {DeckInfo.title} </Text>
      </View>
    </TouchableWithoutFeedback>
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
    elevation: 20,
    marginBottom: 20
  },
  deckName: {
    textAlign: "center"
  }

});
