import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';


// Import Components
import NavBtn from '../components/NavBtn';
import { handleCreateDeck, createDeck, setCurrentDeck } from "../actions/DecksAction";

class AddDeck extends React.Component{
  state = { newDeckName: ""}

  addDeck = () => {
    const { navigation, handleAddDeck, createDeck, decks } = this.props;
    const {newDeckName} = this.state;

    // TODO change back to handleCreateDeck
    createDeck(newDeckName)
    navigation.navigate("Single Deck")
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
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    decks: state.decks
  }
}

const mapDispatchToProps = {
  handleCreateDeck,
  createDeck,
  setCurrentDeck
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeck);




//
// export default connect({
//   mapStateToProps,
//   mapDispatchToProps
// })(AddCard);





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
