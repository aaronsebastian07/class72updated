import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDvQ3Pn4f7qT_7dU8pMZh0Ox_24NMqNjxY",
    authDomain: "wireless-library-app-97f61.firebaseapp.com",
    projectId: "wireless-library-app-97f61",
    storageBucket: "wireless-library-app-97f61.appspot.com",
    messagingSenderId: "1038848443053",
    appId: "1:1038848443053:web:00b4e95394daae9d803c24"
  };
  // Initialize Firebase
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();
