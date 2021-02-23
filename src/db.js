import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyArC9BqHxpFDu6MpOLxABBLBuYM4KwMEQU",
  authDomain: "shop-93407.firebaseapp.com",
  projectId: "shop-93407",
  storageBucket: "shop-93407.appspot.com",
  messagingSenderId: "588810951364",
  appId: "1:588810951364:web:493189acf8f13f2a760791",
  measurementId: "G-G588LS7K1Z"
  };

  // Get a Firestore instance
export const db = firebase
.initializeApp(firebaseConfig)
.firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })

export default {
auth: firebase.auth(),
loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
    })
},
loginFacebook() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
    })
},
logout() {
  firebase.auth().signOut()
  .then(function() {
    console.log("Has cerrado sesion");
  })
  .catch(function(error) {
    console.log(error)});
}
}