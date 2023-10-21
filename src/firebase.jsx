// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsl0ZPSv7ii_gzjQh0uAdrJWJVTFTE6Dg",
  authDomain: "applogin00000.firebaseapp.com",
  projectId: "applogin00000",
  storageBucket: "applogin00000.appspot.com",
  messagingSenderId: "384867804165",
  appId: "1:384867804165:web:bd0af2cc3345696a77e86c",
  measurementId: "G-9B3EREZRET"
};

export default function initializeFirebase() {
  return new Promise((resolve, reject) => {
    try {
      const app = initializeApp(firebaseConfig);
      resolve(app);
    } catch (error) {
      reject(error);
    }
  });
}
