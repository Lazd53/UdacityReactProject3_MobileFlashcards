import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';

export default function NavBtn ({text, callback}) {
  return (
    <TouchableNativeFeedback onPress={ () => callback() }>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "70%",
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20
  }
})
