<<<<<<< HEAD

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4yvC9P3ura-NB6OXmaZ2pKE-p8Khc_bM",
  authDomain: "covidcheckthyhonor.firebaseapp.com",
  databaseURL: "https://covidcheckthyhonor.firebaseio.com",
  projectId: "covidcheckthyhonor",
  storageBucket: "covidcheckthyhonor.appspot.com",
  messagingSenderId: "932024120874",
  appId: "1:932024120874:web:67b30bd5bdacfb1a6a3553",
  measurementId: "G-H4ENEGT88V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
=======
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
>>>>>>> 31c0a6311775f42aba305c042d7465aca98e8001
