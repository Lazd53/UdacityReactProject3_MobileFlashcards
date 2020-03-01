import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import DeckBtn from '../components/DeckBtn';

class AllDecks extends React.Component {

  render(){
    const allDecks = {
      multiplication: {
        title: "Multiplication"
      },
      division: {
        title: "Division"
      },
      biology: {
        title: "Biology"
      }
    }
    const keys = Object.keys(allDecks);
    return (
      <View style={styles.container}>
        <Text> All Decks </Text>
        { keys.map( key => <DeckBtn DeckInfo = {allDecks["mulitiplication"]}/>)}
      </View>
    );
  }
}

export default AllDecks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
