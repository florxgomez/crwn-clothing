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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};
export default firebase;
