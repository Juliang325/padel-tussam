
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCO1nX8Wpx0RzlPIJiaYeFXXPaeWu-71g",
  authDomain: "padeltussam-5d824.firebaseapp.com",
  projectId: "padeltussam-5d824",
  storageBucket: "padeltussam-5d824.appspot.com",
  messagingSenderId: "886527381446",
  appId: "1:886527381446:web:d7bfd24c9ab8572cdfecc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);