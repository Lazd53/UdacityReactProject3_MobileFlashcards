import {Platform } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

export function isIOS (){
  if (Platform.OS === "ios"){
    return true
  }else{
    return false
  }
}
