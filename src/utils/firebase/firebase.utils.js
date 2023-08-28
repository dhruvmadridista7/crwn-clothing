// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth, 
    // signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZZ85HWlbtncOex4XKV-HDe_UKXOhiOFo",
  authDomain: "crwn-clothing-db-219a2.firebaseapp.com",
  projectId: "crwn-clothing-db-219a2",
  storageBucket: "crwn-clothing-db-219a2.appspot.com",
  messagingSenderId: "548133723624",
  appId: "1:548133723624:web:745f7527dc596da04d185d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// There are multiple way we can provide different providers like fackbook, github and more...
// if we want to use facebook then const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

googleProvider.getCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth();  //this will keep track of the authentication state of the entire application.
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    // console.log(userSnapshot);
    console.log(userSnapshot.exists()) //this will check that if 'user' collection or userSnapshot data is exists in the db or not

    // if user data does not exist
    // create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }

    // if user data exists
    // return userDocRef
    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

// This file and whole process and functions and libs are specific for google.

