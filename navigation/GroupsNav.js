import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import AllGroups from '../screens/AllGroups';
import EditGroup from '../screens/EditGroup';
import DeleteGroup from '../screens/DeleteGroup';
import AddGroup from '../screens/AddGroup';

const stack = createStackNavigator();

export default function GroupsNav(props) {
    return(
      <View style={styles.container}>
        <stack.Navigator initialRouteName="AllGroups">
          <stack.Screen name="AllGroups" component={AllGroups}/>
          <stack.Screen name="EditGroup" component={EditGroup}/>
          <stack.Screen name="DeleteGroup" component={DeleteGroup}/>
          <stack.Screen name="AddGroup" component={AddGroup}/>
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
