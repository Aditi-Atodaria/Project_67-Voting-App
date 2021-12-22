import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDf-CJsSlBgVt3QEYNxo85ZOsZBXkQZsX8",
    authDomain: "project67-9dbfc.firebaseapp.com",
    databaseURL: "https://project67-9dbfc-default-rtdb.firebaseio.com",
    projectId: "project67-9dbfc",
    storageBucket: "project67-9dbfc.appspot.com",
    messagingSenderId: "633307093314",
    appId: "1:633307093314:web:c49f1aa2c4c69c46c7d0db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();