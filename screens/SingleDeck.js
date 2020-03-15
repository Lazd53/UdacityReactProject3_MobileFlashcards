import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

// Import Components
import NavBtn from '../components/NavBtn';

class SingleDeck extends React.Component{

  render(){
    const { navigation, currentDeck } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.title}> {currentDeck.name} </Text>
          <Text style={styles.numCards}> {currentDeck.cards.length} cards </Text>
        </View>
        <View style={styles.btnContainer}>
          <NavBtn text="Start Quiz" callback={()=>{}} />
          <NavBtn text="Add Card" callback={() => navigation.navigate("Add Card")} />
          <NavBtn text="Delete Deck" callback={()=>navigation.navigate("Delete Deck")} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ( state ) => {
  const {Decks, CurrentSelection} = state
  return {
    Decks,
    CurrentSelection: CurrentSelection.id,
    currentDeck: Object.values(Decks.filter( deck => Object.keys(deck)[0] === CurrentSelection.id )[0])[0]
  }
}

export default connect(mapStateToProps)(SingleDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 40
  },
  btnContainer: {
    height: 170,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txtContainer: {
    height: 170,
    width: "70%",
    alignItems: "center"
  },
  title: {
    fontSize: 36,
    textAlign: "center"
  },
  numCards: {
    fontSize: 28
  }
});
