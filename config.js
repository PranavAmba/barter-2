import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDKQdOP3N28BY1p41UWU8WxKU0izGPGduo",
  authDomain: "barter-ea685.firebaseapp.com",
  projectId: "barter-ea685",
  storageBucket: "barter-ea685.appspot.com",
  messagingSenderId: "39797357981",
  appId: "1:39797357981:web:14babae78de77880e70374"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()