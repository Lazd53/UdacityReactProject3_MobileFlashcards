import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// Components
import NavBtn from '../components/NavBtn';

import { handleRetake } from '../actions/QuizAction';

class QuizScoresScreen extends React.Component {

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
    navigation.navigate("All Decks")
  }

  render(){
    const {correctAnswers, answeredWrong, totalQuestions} = this.props;
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.resultsContainer}>
          <Text> You got {correctAnswers.length} out of {totalQuestions} correct! </Text>
        </View>
        <View style={styles.buttonContainer}>
          <NavBtn text="Retake Quiz" callback={this.handleRetakeQuiz} />
          <NavBtn text="Retake Missed Questions" callback={this.handleRetakeMissed}  />
          <NavBtn text="Return To Home Page" callback={this.handleReturnHome} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.Quiz.answeredCorrect,
    answeredWrong: state.Quiz.answeredWrong,
    totalQuestions: state.Quiz.totalQuestions

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
    paddingBottom: 20
  },
  resultsContainer: {
    flex: 1
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    height: 160,
    justifyContent: "space-between"
  }
});
