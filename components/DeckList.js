import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function DeckList( {title, symbol, decks, callback} ){
  return (
    <View style={styles.listsContainer}>
      <Text style={styles.title}> {title} </Text>
      <View style={styles.listContainer}>
        <Text style={styles.deckName}>ThisText</Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#333333"
          onPress={callback}
          >
          <FontAwesome name={symbol}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default DeckList;

const styles = StyleSheet.create({
  listsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    marginBottom: 20
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginLeft: 20
  },
  deckName: {
    fontSize: 26
  },
  button: {
    width: 30,
    height: 30,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
