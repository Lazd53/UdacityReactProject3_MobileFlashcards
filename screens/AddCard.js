import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
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
    navigation.navigate("Single Deck")
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder = "New Question"
            onChangeText = {(text) => this.handleQuestion(text)}
            value = {this.state.newCardQuestion}
          />
          <TextInput
            style={styles.inputField}
            placeholder = "Enter Answer"
            onChangeText = {(text) => this.handleAnswer(text)}
            value = {this.state.newCardAnswer}
          />
        </View>
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
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 20
  },
  inputContainer: {
    width: "100%",
    height: 130,
    alignItems: "center",
    justifyContent: "space-between"
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
