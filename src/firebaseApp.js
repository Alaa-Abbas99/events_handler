import firebase from 'firebase'
import * as data from './config'
 
  const config = data.config
  export const firebaseApp = firebase.initializeApp(config)
  export const eventsRef = firebaseApp.database().ref().child('events')
