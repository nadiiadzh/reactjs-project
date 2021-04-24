import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVMtBayPnJE7YqQyEmIkGjFWHpVTOHS2I",
    authDomain: "ecom-store-3bab7.firebaseapp.com",
    projectId: "ecom-store-3bab7",
    storageBucket: "ecom-store-3bab7.appspot.com",
    messagingSenderId: "900857155013",
    appId: "1:900857155013:web:2ba2cdfe6e3e11417a0fac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase