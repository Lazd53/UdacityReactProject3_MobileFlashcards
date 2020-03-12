import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import QuizQuestionScreen from '../screens/QuizQuestionScreen';
import QuizAnswerScreen from '../screens/QuizAnswerScreen';
import QuizScoresScreen from '../screens/QuizScoresScreen';

const stack = createStackNavigator();

export default function QuizzesNav(props){

    return(
      <View style={styles.container}>
        <stack.Navigator initialRouteName="QuizQuestion">
          <stack.Screen name="QuizQuestion" component={QuizQuestionScreen}/>
          <stack.Screen name="QuizAnswer" component={QuizAnswerScreen}/>
          <stack.Screen name="QuizScores" component={QuizScoresScreen}/>
        </stack.Navigator>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
