import {Platform, AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'MOBILEFLASHCARDS_NOTIFICATIONS'

export function isIOS (){
  if (Platform.OS === "ios"){
    return true
  }else{
    return false
  }
}

export function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDeck (deckId, deckName){
  return {
    id: deckId,
    cards: [],
    name: deckName
  }
}

export function formatCard ( question, answer, deckName){
  let id = generateID();
  return {
    [id] : {
      id,
      question,
      answer,
      deckName
    }
  }
}

export function filterForCurrentSelection(Items, CurrentSelectionID){
  return Object.values(Items.filter( item => Object.keys(item)[0] === CurrentSelectionID )[0])[0]
}

export function clearLocalNotifications(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification(){
  return {
    title: "Time to quiz",
    body: "It's been a day since you studied! Want to take a quiz?",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: false
    }
  }
}

export function setLocalNotification (){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then( (data) => {
      if (data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then( ({status}) => {
            if (status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(8)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',

                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
