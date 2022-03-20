// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
   signInWithRedirect, 
   signInWithPopup, 
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword
} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5j2g15b_S7SVUth157iY7rcOuqVwSlJw",
  authDomain: "crown-clothing-db-e9fe1.firebaseapp.com",
  projectId: "crown-clothing-db-e9fe1",
  storageBucket: "crown-clothing-db-e9fe1.appspot.com",
  messagingSenderId: "481288750227",
  appId: "1:481288750227:web:07a4fa3c56f2fdfa2a3966"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
   promp: "select_account",
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
   if(!userAuth) return
   const userDocRef = doc(db, 'users', userAuth.uid)
   const userSnapshot = await getDoc(userDocRef);
   if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
         await setDoc(userDocRef, {
            displayName,
            email, 
            createdAt,
            ...additionalInformation
         })
      } catch (error) {
         console.log(error)
      }
   }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;
 
   return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;
 
   return await signInWithEmailAndPassword(auth, email, password);
};
// export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(provider, auth)