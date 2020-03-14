import {Platform } from 'react-native';

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
