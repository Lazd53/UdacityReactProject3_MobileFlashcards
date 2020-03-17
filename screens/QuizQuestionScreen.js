import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// Components
import NavBtn from '../components/NavBtn';

class QuizQuestionScreen extends React.Component {
  state = { question: true}

  showAnswer = () =>{
    this.setState({question: false})
  }

  handleWrongAnswer = () => {
    console.log("oops")
  }

  handleRightAnswer = () => {
    console.log("hell yeah!")
  }

  render(){
    const { navigation, currentQuestion } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.deckName}>Defense Against the Dark Arts</Text>
          <Text style={styles.question}>Q: {currentQuestion.question}</Text>
          {!this.state.question && <Text style={styles.answer}>A: {currentQuestion.answer}</Text>}
        </View>
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
    currentQuestion: Object.values(state.Quiz.questions[0])[0]
  }
  // state: state

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
  }
})
