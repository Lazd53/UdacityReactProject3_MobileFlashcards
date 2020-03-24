import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

// Import Components
import NavBtn from '../components/NavBtn';

// Import utils
import {filterForCurrentSelection} from '../utils/helpers';

import { setQuiz } from '../actions/QuizAction';

class SingleDeck extends React.Component{

  componentDidMount(){
    const {currentDeck, navigation} = this.props;
    navigation.setOptions({title: currentDeck.name })
  }

  handleStartQuiz = () => {
    const {currentDeck, navigation, setQuiz} = this.props;
    if (currentDeck.cards.length !== 0) {
      setQuiz(currentDeck.cards)
      navigation.navigate("Quizzes")
    }

  }

  render(){
    const { navigation, currentDeck } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.title}> {currentDeck.name} </Text>
          <Text style={styles.numCards}> {currentDeck.cards.length} cards </Text>
          {currentDeck.cards.length === 0 && <Text style={styles.warning}> Maybe you need to add a card before you can take a quiz...</Text>}
        </View>
        <View style={styles.btnContainer}>
          <NavBtn text="Add Card" callback={() => navigation.navigate("Add Card")} />
          <NavBtn text="Start Quiz" callback={this.handleStartQuiz} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ( state ) => {
  const {Decks, CurrentSelection} = state;
  return {
    currentDeck: Decks[CurrentSelection.id]
  }
}

const mapDispatchToProps = {
  setQuiz
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 40
  },
  btnContainer: {
    height: 110,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txtContainer: {
    height: 170,
    width: "70%",
    alignItems: "center"
  },
  title: {
    fontSize: 36,
    textAlign: "center"
  },
  numCards: {
    fontSize: 28
  },
  warning: {
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center'
  }
});
