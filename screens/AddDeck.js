import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Import Components
import NavBtn from '../components/NavBtn';


class AddDeck extends React.Component{
  state = { newDeckName: ""}

  addDeck = () => {
    const { navigation } = this.props;
    this.setState( { newDeckName: ""});
    // TODO Add deck to Async
    // TODO add deck to Redux store
    navigation.navigate("All Decks")
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

export default AddDeck;

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
