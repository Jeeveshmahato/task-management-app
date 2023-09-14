// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCuA6geekfrMfSYGwSKgXjqBXxjN6v9rT0",
    authDomain: "task-b8bd4.firebaseapp.com",
    databaseURL: "https://task-b8bd4-default-rtdb.firebaseio.com",
    projectId: "task-b8bd4",
    storageBucket: "task-b8bd4.appspot.com",
    messagingSenderId: "679671825963",
    appId: "1:679671825963:web:c7f738254894e951c10c6e",
    measurementId: "G-B1VPXXMGQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Create and export the 'auth' instance
const auth = getAuth(app);
export { auth };
