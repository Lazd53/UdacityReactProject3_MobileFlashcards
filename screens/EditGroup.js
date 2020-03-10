import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Components
import NavBtn from '../components/NavBtn';
import DeckList from '../components/DeckList';

// TODO
  // Change nav header to say name of group

class EditGroup extends React.Component{

  handleAddDeck = () => {
    console.log("add deck")
  };
  handleRemoveDeck = () => {
    console.log("remove deck")
  };
  render(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.addRemoveDecksContainer}>
            <DeckList
              title="Current Decks"
              symbol="minus"
              callback={this.handleAddDeck}
            />
            <DeckList
              title="Available Decks"
              symbol="plus"
              callback={this.handleRemoveDeck}
            />
        </ScrollView>

        <NavBtn text="Edit Group" callback={()=>{}} />
      </View>
    );
  }
}

export default EditGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  addRemoveDecksContainer: {
    flex: 1,
    width: "70%",
    marginBottom: 20
  }
});
