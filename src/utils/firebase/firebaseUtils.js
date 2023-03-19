/* Since this is the first time im learning firebase, 
so ill create notes for myself in here */

// ? First we initialize the firebase with this import
import { initializeApp } from "firebase/app";

// ? Then we import the methods for the auth thing, just as the name sounds
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

// ? These are the docs methods to store the data in firestore db
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// !! this is the config key we get when we create the db, its most important
const firebaseConfig = {
	apiKey: "AIzaSyCcSI3v3fAitc7k4aFJFgrAsvbhD8EA28w",
	authDomain: "crwnrz1704.firebaseapp.com",
	projectId: "crwnrz1704",
	storageBucket: "crwnrz1704.appspot.com",
	messagingSenderId: "326057994430",
	appId: "1:326057994430:web:617010756d29ca656996ef",
	measurementId: "G-E62WKPP10T",
};

// * we use the initializeApp method with the config file to create the firebase instance
const firebaseApp = initializeApp(firebaseConfig);

// ? Now setting the provider from the providers we set up in firebase
const provider = new GoogleAuthProvider();

// ? these prompts are specific keywords
provider.setCustomParameters({
	prompt: "select_account",
});

// ? Initializing the auth method
export const auth = getAuth();

// * the popup method takes two para, the auth method and provider
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// * This instantiates the database from firestore
export const db = getFirestore();

// * Creating the doc if it doenst exists
export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userDocRef);
	// console.log(userDocRef.exists());

	// * if user data doesnt exists, create one
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}

	// * if the data exists, just return
	return userDocRef;
};
