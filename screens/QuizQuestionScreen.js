import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// Components
import NavBtn from '../components/NavBtn';

// redux
import {answerCorrect, answerWrong} from '../actions/QuizAction';

class QuizQuestionScreen extends React.Component {
  state = { question: true}

  componentDidMount(){
    const {currentDeck, navigation} = this.props;
    navigation.setOptions({title: currentDeck.name + " quiz" })
  }

  showAnswer = () =>{
    this.setState({question: false})
  }

  handleWrongAnswer = () => {
    const {dispatch, currentQuestion} = this.props;
    this.setState({question: true})
    dispatch (answerWrong( currentQuestion.id ))
  }

  handleRightAnswer = () => {
    const {dispatch, currentQuestion} = this.props;
    this.setState({question: true})
    dispatch (answerCorrect( currentQuestion.id ))
  }

  render(){
    const { navigation, currentQuestion, questionsLeft } = this.props;
    !currentQuestion && navigation.navigate("QuizScores");
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.deckName}>{currentQuestion.deckName}</Text>
          <Text style={styles.question}>Q: {currentQuestion.question}</Text>
          {!this.state.question && <Text style={styles.answer}>A: {currentQuestion.answer}</Text>}
        </View>
        <Text style={styles.qLeft}> {questionsLeft} questions left!</Text>
        <View style={styles.buttons}>
          {this.state.question
            ? <NavBtn text="Show Answer" callback={this.showAnswer} />
            : <>
                <NavBtn text="I was right!" callback={this.handleRightAnswer} />
                <NavBtn text="Maybe next time..." callback={this.handleWrongAnswer} />
              </>
          }
        </View>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentDeck: state.Decks[state.CurrentSelection.id],
    questionsLeft: state.Quiz.questions.length,
    totalQuestions: state.Quiz.totalQuestions,
    currentQuestion: state.Quiz.questions.length === 0
          ? false
          : Object.values(state.Quiz.questions[0])[0]
  }
}

const mapDispatchToProps = {
  answerCorrect,
  answerWrong
}

export default connect(
  mapStateToProps
)(QuizQuestionScreen);

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
    fontSize: 20,
    textAlign: 'center'
  },
  answer: {
    fontSize: 18,
    textAlign: 'center'
  },
  buttons: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    height: 110,
    justifyContent: "space-between"
  },
  qLeft: {
    width: "70%",
    textAlign: "right"
  }
})
