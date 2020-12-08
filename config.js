import firebase from 'firebase'
require ('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBjztGqPjNnQkMmH3MeXEv8P6t-BV8ht8w",
    authDomain: "barterapp-1d4d2.firebaseapp.com",
    databaseURL: "https://barterapp-1d4d2.firebaseio.com",
    projectId: "barterapp-1d4d2",
    storageBucket: "barterapp-1d4d2.appspot.com",
    messagingSenderId: "310703252767",
    appId: "1:310703252767:web:add69f2bcdac452d623c2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()