import * as React from 'react';
import { Image, Platform, StyleSheet, Text, Button, View, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Import Components
import DeckBtn from '../components/DeckBtn';
import NavBtn from '../components/NavBtn';

class AllDecks extends React.Component {

  navigateToAddDeck = () => {
    const { navigation } = this.props;
    navigation.navigate('Add a Deck');
  }

  navigateToSingleDeck = () => {
    const { navigation } = this.props;

    navigation.navigate('Single Deck')
  }

  render(){
    const { navigation } = this.props
    const allDecks = {
      multiplication: {
        title: "Multiplication"
      },
      division: {
        title: "Division"
      },
      biology: {
        title: "Biology"
      },
      wands: {
        title: "Wands"
      },
      defense: {
        title: "Defense Against the Dark Arts"
      }
    }

    const keys = Object.keys(allDecks);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollViewStyling}>
          <View style={styles.decksContainer}>
          { keys.map( key => {
            return <DeckBtn key={key} callback = {this.navigateToSingleDeck} DeckInfo = {allDecks[key]}/>})}
          </View>
        </ScrollView>
        <NavBtn text="Add a Deck" callback={this.navigateToAddDeck}/>
      </View>
    );
  }
}

export default AllDecks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollViewStyling: {
    flex: 1,
    width: "70%",
    marginBottom: 20
  },
  decksContainer: {
    flexWrap: "wrap",
    alignContent: "space-between",
    justifyContent: "space-between",
    flexDirection: "row",

  }
});
