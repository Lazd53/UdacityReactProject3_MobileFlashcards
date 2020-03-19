import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const ResultsItems = ({results, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      {results.map( result => {
        const r = Object.values(result)[0]
        return <View style={styles.questionGroup} >
                <Text style={styles.questions} key={"Q" + r.id}> Q: {r.question}</Text>
                <Text style={styles.answers} key={"A" + r.id}> A: {r.answer}</Text>
               </View>
        })
      }
    </View>
  )
}

export default ResultsItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 10

  },
  title: {
    fontSize: 20,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: 10,
    width: "50%"
  },
  questions: {
    fontSize: 18,
    paddingLeft: 10
  },
  answers: {
    fontSize: 16,
    paddingLeft: 20
  },
  questionGroup: {
    marginBottom: 10
  }
})
