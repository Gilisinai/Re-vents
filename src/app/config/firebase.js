import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA2i7iV6MAfUlMA-7f6MwvIuyBzSSGCSf0",
    authDomain: "revents-c309d.firebaseapp.com",
    databaseURL: "https://revents-c309d.firebaseio.com",
    projectId: "revents-c309d",
    storageBucket: "revents-c309d.appspot.com",
    messagingSenderId: "650476228184",
    appId: "1:650476228184:web:edb5d15d0575f7be0ac42d"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
