import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_qiEtcqjaVdAaDQyxyLH8-CC-IQfcLd8",
  authDomain: "crwn-db-c979d.firebaseapp.com",
  databaseURL: "https://crwn-db-c979d.firebaseio.com",
  projectId: "crwn-db-c979d",
  storageBucket: "crwn-db-c979d.appspot.com",
  messagingSenderId: "866238409881",
  appId: "1:866238409881:web:590f24132e0035d5b2dc08",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
