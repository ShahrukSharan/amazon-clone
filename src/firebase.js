import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.APP_KEY}`,
  authDomain: "clone-f65b7.firebaseapp.com",
  projectId: "clone-f65b7",
  storageBucket: "clone-f65b7.appspot.com",
  messagingSenderId: "650315213495",
  appId: `${process.env.APP_ID}`,
  measurementId: "G-6561JBMKM8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
