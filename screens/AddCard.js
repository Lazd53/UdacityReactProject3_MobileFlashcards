import * as React from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Import Components
import NavBtn from '../components/NavBtn';


class AddCard extends React.Component{
  state = { newCardQuestion: "",
            newCardAnswer: ""
          }

  handleSubmit = () => {
    const { navigation } = this.props;
    // TODO Add card to Async
    // TODO add card to Redux store
    this.setState( { newCardName: "", newCardAnswer: ""});
    navigation.navigate("SingleDeck")
  }

  handleQuestion = (newText) => {
    this.setState({newCardQuestion: newText})
  }

  handleAnswer = (newText) => {
    this.setState({newCardAnswer: newText})
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputField}
          placeholder = "New Question"
          onChangeText = {(text) => this.handleQuestion(text)}
          value = {this.state.newDeckName}
        />
        <TextInput
          style={styles.inputField}
          placeholder = "Enter Answer"
          onChangeText = {(text) => this.handleAnswer(text)}
          value = {this.state.newDeckName}
        />
        <NavBtn text="Add Card" callback={this.handleSubmit} />
      </View>
    );
  }
}

export default AddCard;

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
