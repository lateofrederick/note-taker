import  firebase from 'firebase';
import firestore from 'firebase/firestore'


//firebase config
const config = {
    apiKey: "AIzaSyBdUPeRn38ylps0pN_545SiXGcBo1znfoc",
    authDomain: "note-taker-2176f.firebaseapp.com",
    databaseURL: "https://note-taker-2176f.firebaseio.com",
    projectId: "note-taker-2176f",
    storageBucket: "note-taker-2176f.appspot.com",
    messagingSenderId: "457815293569",
    appId: "1:457815293569:web:041bdf6f274914b3"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
