import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';


export default function GroupControlBtn ({size, icon, callback}) {
  return (
    <TouchableWithoutFeedback onPress={() => callback()} style={styles.btn}>
      <View style = {styles.btn}>
        {icon}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center"
  }
})
