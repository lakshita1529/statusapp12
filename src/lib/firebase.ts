import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg3RtLuRyvR_ekcGMLb9bMNhckFuVMxn8",
  authDomain: "statusapp-caa88.firebaseapp.com",
  projectId: "statusapp-caa88",
  storageBucket: "statusapp-caa88.appspot.com",
  messagingSenderId: "534907933548",
  appId: "1:534907933548:web:916adbdfc8fb8f9f4c9949",
  measurementId: "G-NMPLR09F3L",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const register = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
