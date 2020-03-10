import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { isIOS } from '../utils/helpers'

import GroupControlBtn from './GroupControlBtn'

class GroupControls extends React.Component {
  openDeleteConfirmation = () =>{
    // open
  }
  handleDelete = () =>{

  }

  handleEdit = () =>{
    console.log("triggered")
    const {navigation } = this.props;
    navigation.navigate('EditGroup')
  }

  handleQuiz = () => {

  }

  render(){
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleAndDelete}>
          <Text style={styles.title}>{title}</Text>
          <GroupControlBtn size={30} icon={<AntDesign name="delete" size={15} />} />
        </View>
        <View style={styles.btnsContainer}>
          <GroupControlBtn
            size={50}
            icon={ isIOS()
                    ? <Ionicons name="ios-book" size={30} />
                  : <Feather  name="book-open" size={30} />
                  }
          />
          <GroupControlBtn
            callback = {this.handleEdit}
            icon={
              <AntDesign
                name="edit"
                size={30}
              />}
          />
        </View>
      </View>
    )
  }

}

export default GroupControls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
  },
  btnsContainer: {
    width: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  titleAndDelete: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  title: {
    fontSize: 30
  }
})
