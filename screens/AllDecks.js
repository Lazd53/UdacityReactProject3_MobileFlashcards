import * as React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
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

  renderDecks = (decks) => {
    let allDecks = decks.map( (deck) => {
      const deckInfo = Object.values(deck)[0];
      return (<DeckBtn key={deckInfo.id} callback = {this.navigateToSingleDeck} DeckInfo = {deckInfo}/>)
    } )
    return allDecks
  }

  render(){
    const { navigation, decks } = this.props
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
            {decks.length === 0
                ? <Text style={styles.addDeckCallToAction}>Add a deck to start!</Text>
                : this.renderDecks( this.props.decks )
            }
          </View>
        </ScrollView>
        <NavBtn text="Add a Deck" callback={this.navigateToAddDeck}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    decks: state.Decks
  }
}

export default connect(mapStateToProps)(AllDecks);

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
  },
  addDeckCallToAction: {
    fontSize: 28,
    flex: 1,
    textAlign: 'center'
  }
});

// { keys.map( key => {
//   return <DeckBtn key={key} callback = {this.navigateToSingleDeck} DeckInfo = {allDecks[key]}/>})}
