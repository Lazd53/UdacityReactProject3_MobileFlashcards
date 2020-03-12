import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import NavBtn from '../components/NavBtn';

class DeleteGroup extends React.Component {

  handleDeleteDeck = () => {
    const {navigation} = this.props;
    // Delete Deck in Redux
    // Delete Deck in Async
    navigation.navigate("AllGroups");
  }
  render(){
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <AntDesign name="warning" size={250} />
          <Text style={styles.messageContent}> Are you sure you want to delete this Group? </Text>
        </View>
        <View style={styles.btnContainer}>
          <NavBtn text="Yes, I'm sure" callback={ this.handleDeleteDeck } />
          <NavBtn text="Oh no, hold on" callback={() => navigation.navigate("AllGroups")} />
        </View>
      </View>
    );
  }
}

export default DeleteGroup;

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
