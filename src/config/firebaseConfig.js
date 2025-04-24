import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZS1__odAbaLnby0yf4CSlK1QN9A8wh2o",
  authDomain: "ptac-3.firebaseapp.com",
  projectId: "ptac-3",
  storageBucket: "ptac-3.firebasestorage.app",
  messagingSenderId: "772986783277",
  appId: "1:772986783277:web:71db402d7f6bcfdc5c1aa4",
  measurementId: "G-NTVYNJM7HY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;