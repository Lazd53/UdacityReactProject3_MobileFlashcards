import * as React from 'react';
import { TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Components
import NavBtn from '../components/NavBtn';
import DeckList from '../components/DeckList';


class AddGroup extends React.Component{
  state = { newGroupName: ""}

  addGroup = () => {
    const { navigation } = this.props;
    this.setState( { newDeckName: ""});
    // TODO Add deck to Async
    // TODO add deck to Redux store
    navigation.navigate("All Decks")
  }

  controlText = (newText) => {
    this.setState({newGroupName: newText})
  }


  handleAddDeck = () => {
    console.log("add deck")
  };
  handleRemoveDeck = () => {
    console.log("remove deck")
  };
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputField}
          placeholder = "Enter New Group Name"
          onChangeText = {(text) => this.controlText(text)}
          value = {this.state.newGroupName}
        />
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

        <NavBtn text="Add Group" callback={()=>{}} />
      </View>
    );
  }
}

export default AddGroup;

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
  },
  inputField: {
        height: 50,
        fontSize: 20,
        paddingLeft: 10,
        width: "70%",
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10
      }
});
