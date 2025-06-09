// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaLGZEMydOwALZ12pxu0cgDM6UnzXuM0A",
  authDomain: "school-tech-15c75.firebaseapp.com",
  projectId: "school-tech-15c75",
  storageBucket: "school-tech-15c75.firebasestorage.app",
  messagingSenderId: "724267742306",
  appId: "1:724267742306:web:d35f17ddd6098669824d3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
