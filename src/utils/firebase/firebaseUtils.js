import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCcSI3v3fAitc7k4aFJFgrAsvbhD8EA28w",
	authDomain: "crwnrz1704.firebaseapp.com",
	projectId: "crwnrz1704",
	storageBucket: "crwnrz1704.appspot.com",
	messagingSenderId: "326057994430",
	appId: "1:326057994430:web:617010756d29ca656996ef",
	measurementId: "G-E62WKPP10T",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
