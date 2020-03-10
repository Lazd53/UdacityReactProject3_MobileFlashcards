import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import AllGroups from '../screens/AllGroups';
import EditGroup from '../screens/EditGroup';
import DeleteGroup from '../screens/DeleteGroup';
// import AddGroups from '../screens/AddGroup';

const stack = createStackNavigator();

export default function GroupsNav(props) {
    return(
      <View style={styles.container}>
        <stack.Navigator initialRouteName="AllGroups">
          <stack.Screen name="AllGroups" component={AllGroups}/>
          <stack.Screen name="EditGroup" component={EditGroup}/>
          <stack.Screen name="DeleteGroup" component={DeleteGroup}/>
        </stack.Navigator>
      </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
