// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2SYt9Flk8TUiYWXQ5cy6xSmw5KWtfamU",
  authDomain: "movie-site-9b867.firebaseapp.com",
  projectId: "movie-site-9b867",
  storageBucket: "movie-site-9b867.firebasestorage.app",
  messagingSenderId: "233538888127",
  appId: "1:233538888127:web:b8318c1fa0072ddadc010a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);