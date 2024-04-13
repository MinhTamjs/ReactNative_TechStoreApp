// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVvzUTfsC4txB6df9rwk1lYM8ID94AtpE",
  authDomain: "techstoreapp-reactnative.firebaseapp.com",
  projectId: "techstoreapp-reactnative",
  storageBucket: "techstoreapp-reactnative.appspot.com",
  messagingSenderId: "1068309508233",
  appId: "1:1068309508233:web:4b4dddfd49037930eb9658",
  measurementId: "G-DEPCSYTP85"
};

// Initialize Firebase
let app;
if (firebase.app.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };