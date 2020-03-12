import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import NavBtn from '../components/NavBtn';

class QuizQuestionScreen extends React.Component {
  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.deckName}>Defense Against the Dark Arts</Text>
          <Text style={styles.question}>What is a horcrux?</Text>
        </View>
        <View style={styles.buttons}>
          <NavBtn text="Show Answer" callback={()=>navigation.navigate("QuizAnswer")} />
        </View>
      </View>

    )
  }
}

export default QuizQuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 40
  },
  card: {
    flex: 1,
    width: "70%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: "15%",
    alignItems: 'center'
  },
  deckName: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30
  },
  question: {
    fontSize: 18,
    textAlign: 'center'
  },
  buttons: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    height: 110,
    justifyContent: "flex-end"
  }
})
