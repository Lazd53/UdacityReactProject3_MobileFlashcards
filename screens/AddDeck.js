import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';


// Import Components
import NavBtn from '../components/NavBtn';
import { handleCreateDeck, createDeck, setCurrentDeck } from "../actions/DecksAction";

import { generateID, formatDeck } from '../utils/helpers';

class AddDeck extends React.Component{
  state = { newDeckName: ""}

  addDeck = () => {
    const { navigation, handleAddDeck, createDeck, decks } = this.props;
    const {newDeckName} = this.state;
    if (newDeckName !== ""){
      const newID = generateID();
      const newDeckObj = formatDeck(newID, newDeckName )
      const newDecksObj = {...decks, [newID]: newDeckObj}
      createDeck(newDeckObj, newID);
      AsyncStorage.setItem('Decks', JSON.stringify(newDecksObj))
      navigation.navigate("Single Deck")
    }
  }

  tempGetStorage = () =>{
    AsyncStorage.getItem("Decks")
      .then((results) => {
        const data = JSON.parse(results)
        console.log(data)
      })
  }

  controlText = (newText) => {
    this.setState({newDeckName: newText})
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputField}
          placeholder = "Enter Deck Name"
          onChangeText = {(text) => this.controlText(text)}
          value = {this.state.newDeckName}
        />
        <NavBtn text="Add Deck" callback={this.addDeck} />
        <NavBtn text="temp current DB" callback={this.tempGetStorage} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    decks: state.Decks
  }
}

const mapDispatchToProps = {
  createDeck,
  setCurrentDeck
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeck);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "space-around"
  },
  inputField: {
      height: 50,
      fontSize: 20,
      paddingLeft: 10,
      width: "70%",
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 10
    }
  }
);
