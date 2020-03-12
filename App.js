// packages
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons, MaterialCommunityIcons, Feather, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isIOS } from './utils/helpers';

// Navigation
import DecksNav from './navigation/DecksNav'
import GroupsNav from './navigation/GroupsNav'
import QuizzesNav from './navigation/QuizzesNav'

// Components
import CustomStatusBar from './components/CustomStatusBar';

const Tab = createBottomTabNavigator();


export default function App(props) {
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
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  groupsIcon: {
    flexDirection: "row"
  }
});

            // <Tab.Screen name="Quizzes" component={QuizzesNav} />
