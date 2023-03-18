import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyCcSI3v3fAitc7k4aFJFgrAsvbhD8EA28w",
	authDomain: "crwnrz1704.firebaseapp.com",
	projectId: "crwnrz1704",
	storageBucket: "crwnrz1704.appspot.com",
	messagingSenderId: "326057994430",
	appId: "1:326057994430:web:617010756d29ca656996ef",
	measurementId: "G-E62WKPP10T",
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
