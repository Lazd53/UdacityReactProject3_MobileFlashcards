import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function QuizPickSubject() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Go back to your decks and pick a subject!
        </Text>
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 40
  }
  }
)
