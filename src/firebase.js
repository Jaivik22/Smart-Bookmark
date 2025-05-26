import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHZnt4ulqIHlfO9uUvVe_iAsTqWWsIZAA",
  authDomain: "smart-bookmark-saver.firebaseapp.com",
  projectId: "smart-bookmark-saver",
  storageBucket: "smart-bookmark-saver.firebasestorage.app",
  messagingSenderId: "237111402307",
  appId: "1:237111402307:web:6ad8f313f909dc874399f6",
  measurementId: "G-GRPXVBNQE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db  = getFirestore(app);
export { db, app };