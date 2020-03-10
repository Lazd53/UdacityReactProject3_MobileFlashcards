import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import NavBtn from '../components/NavBtn';

class DeleteDeck extends React.Component {

  handleDeleteDeck = () => {
    const {navigation} = this.props;
    // Delete Deck in Redux
    // Delete Deck in Async
    navigation.navigate("All Decks");
  }
  render(){
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <AntDesign name="warning" size={250} />
          <Text style={styles.messageContent}> Are you sure you want to delete this deck and all the cards in it? </Text>
        </View>
        <View style={styles.btnContainer}>
          <NavBtn text="Yes, I'm sure" callback={ this.handleDeleteDeck } />
          <NavBtn text="Oh no, hold on" callback={() => navigation.navigate("Single Deck")} />
        </View>
      </View>
    );
  }
}

export default DeleteDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20
  },
  btnContainer: {
    height: 110,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  messageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    flex: 1
  },
  messageContent: {
    fontSize: 20
  }
});
