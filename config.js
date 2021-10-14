import *as firebase from 'firebase'
require('@firebase/firestore')

var  firebaseConfig = {
  apiKey: "AIzaSyBrjNxnjYh6l69R311F_L_sZijYzky_X8E",
  authDomain: "willy-app-f5724.firebaseapp.com",
  projectId: "willy-app-f5724",
  storageBucket: "willy-app-f5724.appspot.com",
  messagingSenderId: "210826853861",
  appId: "1:210826853861:web:98e203d0417d957e13030c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.fireStore();