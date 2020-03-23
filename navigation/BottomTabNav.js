import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isIOS } from '../utils/helpers';
import { connect } from 'react-redux';


// Navigation
import DecksNav from './DecksNav';
import GroupsNav from './GroupsNav';
import QuizzesNav from './QuizzesNav';

// Components
import CustomStatusBar from '../components/CustomStatusBar';

// actions
import {setDecks} from '../actions/DecksAction';

const Tab = createBottomTabNavigator();

class BottomTabNav extends React.Component{

  componentDidMount(){
    const {setDecks} = this.props
    AsyncStorage.getItem( "Decks" )
      .then( results => {
        const data = JSON.parse(results)
        data !== null && setDecks(data)

      })
  }
  render(){
    return (
      <View style={styles.container}>
        <CustomStatusBar backgroundColor="blue"  />
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Decks">
            <Tab.Screen
              name="Decks"
              component={DecksNav}
              options={{
                tabBarIcon: ()=>(<MaterialCommunityIcons size={25} name="cards"/>)
              }}
            />
            <Tab.Screen
              name="Groups"
              component={GroupsNav}
              options={{
                tabBarIcon: ()=>(
                  <View style={styles.groupsIcon}>
                    <MaterialCommunityIcons size={25} name="cards"/>
                    <MaterialCommunityIcons size={25} name="cards"/>
                  </View>
                )
              }}
            />
            <Tab.Screen
              name="Quizzes"
              component={QuizzesNav}
              options={{
                tabBarIcon: () => <Entypo name="book" size={25} />
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = {
  setDecks
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomTabNav)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
    groupsIcon: {
    flexDirection: "row"
    }
})
