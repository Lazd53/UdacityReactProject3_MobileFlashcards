import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class QuizAnswerScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text> Quiz Answer </Text>
      </View>
    )
  }
}

export default QuizAnswerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
