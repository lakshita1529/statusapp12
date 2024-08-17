import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const db = getFirestore(app);


export const login = async (email: string, password: string) => {
  try {
    console.log("Attempting to log in with:", { email });
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful:", userCredential);
    return userCredential;
  } catch (error: any) {
    console.error("Login failed:", error);
    throw new Error(error.message || "Login failed. Please try again.");
  }
};

export const register = async (email: string, password: string) => {
  try {
    console.log("Attempting to register with:", { email });
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Registration successful:", userCredential);
    return userCredential;
  } catch (error: any) {
    console.error("Registration failed:", error);
    throw new Error(error.message || "Registration failed. Please try again.");
  }
};


export const getTasks = async () => {
  try {
    const tasksCollection = collection(db, 'tasks'); 
    const taskSnapshot = await getDocs(tasksCollection);
    const taskList = taskSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log("Fetched tasks:", taskList);
    return taskList;
  } catch (error: any) {
    console.error("Failed to fetch tasks:", error);
    throw new Error(error.message || "Failed to fetch tasks. Please try again.");
  }
};

export const handleSignOut = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log("Sign-out successful");
  
    window.location.href = '/login';
  } catch (error: any) {
    console.error("Sign-out error:", error);
  }
};
