import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_ZgABPEakwGMtuWHLOiEzPo1OwepYbVo",
  authDomain: "clone-f65b7.firebaseapp.com",
  projectId: "clone-f65b7",
  storageBucket: "clone-f65b7.appspot.com",
  messagingSenderId: "650315213495",
  appId: "1:650315213495:web:d749faf834a5ce6010bb32",
  measurementId: "G-6561JBMKM8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
