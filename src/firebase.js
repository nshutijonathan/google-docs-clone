import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUokNWLNIojBx-nUpK74lp_XO6fI1sK6k",
  authDomain: "focus-app-fcb60.firebaseapp.com",
  projectId: "focus-app-fcb60",
  storageBucket: "focus-app-fcb60.appspot.com",
  messagingSenderId: "386804380720",
  appId: "1:386804380720:web:21b9144ff41eff45cce9f5",
  measurementId: "G-EXJF7P504Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export default app;
