// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAoz-j2doi_9eHoPXHLMZyXvrakgTRRTSM",
//   authDomain: "sisuniauth.firebaseapp.com",
//   projectId: "sisuniauth",
//   storageBucket: "sisuniauth.firebasestorage.app",
//   messagingSenderId: "617762323396",
//   appId: "1:617762323396:web:e6aa48d022edee456ac291",
//   measurementId: "G-76D4DEMWED"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);





// src/context/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoz-j2doi_9eHoPXHLMZyXvrakgTRRTSM",
  authDomain: "sisuniauth.firebaseapp.com",
  projectId: "sisuniauth",
  storageBucket: "sisuniauth.appspot.com", // ✅ fixed typo: was "firebasestorage.app"
  messagingSenderId: "617762323396",
  appId: "1:617762323396:web:e6aa48d022edee456ac291",
  measurementId: "G-76D4DEMWED",
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Export auth to use in Signup
export const auth = getAuth(app);
