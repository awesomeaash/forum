import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBhwu6oztQ8eR8QcJ7gd7zMTpUTGWs2Jgs",
  authDomain: "forum-2c97f.firebaseapp.com",
  projectId: "forum-2c97f",
  storageBucket: "forum-2c97f.appspot.com",
  messagingSenderId: "469316835327",
  appId: "1:469316835327:web:323d4b236811bd3cf0b9ca"
};
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

