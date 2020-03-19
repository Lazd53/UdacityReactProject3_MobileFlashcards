import React from 'react';
import {StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import ResultsItems from './ResultsItems'

class ResultsContainer extends React.Component{

  render(){
    const {correctAnswers, answeredWrong} = this.props;
    console.log(correctAnswers);
    return(
      <ScrollView style={styles.container}>
        {correctAnswers.length !== 0 &&
          <ResultsItems title="Correct" results={correctAnswers} />}
        {answeredWrong.length !== 0 &&
          <ResultsItems title="Incorrect" results={answeredWrong} />}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.Quiz.answeredCorrect,
    answeredWrong: state.Quiz.answeredWrong,
  }
}

export default connect(mapStateToProps)(ResultsContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
})
