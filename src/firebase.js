//import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
//import "firebase/firestore";
import "firebase/auth";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUqz1ZnV2k8gWJP3KRVgtRTfGZ80ZJzd8",
  authDomain: "covid-track-thy-honor.firebaseapp.com",
  databaseURL: "https://covid-track-thy-honor.firebaseio.com",
  projectId: "covid-track-thy-honor",
  storageBucket: "covid-track-thy-honor.appspot.com",
  messagingSenderId: "298587018675",
  appId: "1:298587018675:web:f0d3ed9427a7aa778c27c6",
  measurementId: "G-0DDC2WGGM3",
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

export const db = db.auth();

//export default firebase = firebase.firestore();
