import * as React from 'react';
import { Text, Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Import Components
import NavBtn from '../components/NavBtn';


class SingleDeck extends React.Component{
  
  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.title}> Defense Against the Dark Arts </Text>
          <Text style={styles.numCards}> 3 cards </Text>
        </View>
        <View style={styles.btnContainer}>
          <NavBtn text="Start Quiz" callback={()=>{}} />
          <NavBtn text="Add Card" callback={() => navigation.navigate("Add Card")} />
          <NavBtn text="Delete Deck" callback={()=>{}} />
        </View>
      </View>
    );
  }
}

export default SingleDeck;

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
    height: 170,
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
  }
});
