import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// Components
import NavBtn from '../components/NavBtn';
import ResultsContainer from '../components/ResultsContainer';
// Action
import { handleRetake } from '../actions/QuizAction';

import {clearLocalNotifications, setLocalNotification} from '../utils/helpers'


class QuizScoresScreen extends React.Component {

  componentDidMount(){
    clearLocalNotifications()
      .then(setLocalNotification)
  }

  handleRetakeQuiz = () => {
    const { correctAnswers, answeredWrong, handleRetake, navigation} = this.props;
    handleRetake(correctAnswers.concat(answeredWrong), navigation);
  }
  handleRetakeMissed = () => {
    const { answeredWrong, handleRetake, navigation} = this.props;
    handleRetake(answeredWrong, navigation);
  }

  handleReturnHome = () => {
    const {navigation} = this.props;
    navigation.navigate("Decks")
  }

  render(){
    const {correctAnswers, answeredWrong, totalQuestions, CurrentDeck} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.resultsContainer}>
          <Text style={styles.text}> You got {correctAnswers.length} out of {totalQuestions} correct! </Text>
          <ResultsContainer/>
        </View>
        <View style={styles.buttonContainer}>
          <NavBtn text="Retake Quiz" callback={this.handleRetakeQuiz} />
          <NavBtn text="Retake Missed Questions" callback={this.handleRetakeMissed}  />
          <NavBtn text={"Return to " + CurrentDeck } callback={this.handleReturnHome} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.Quiz.answeredCorrect,
    answeredWrong: state.Quiz.answeredWrong,
    totalQuestions: state.Quiz.totalQuestions,
    CurrentDeck: state.CurrentSelection.name
  }
}

const mapDispatchToProps = {
  handleRetake
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScoresScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20
  },
  resultsContainer: {
    flex: 1,
    width: "70%"
  },
  text: {
    fontSize: 24
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    height: 160,
    justifyContent: "space-between"
  }
});
