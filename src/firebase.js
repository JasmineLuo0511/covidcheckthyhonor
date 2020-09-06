
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