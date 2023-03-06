// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMSyluYc0IRRxDrA0ZDd5ZVV1fT7RIlvw",
  authDomain: "dayagproject.firebaseapp.com",
  projectId: "dayagproject",
  storageBucket: "dayagproject.appspot.com",
  messagingSenderId: "888334903530",
  appId: "1:888334903530:web:ec8faa8494e1f7951a8f93",
  measurementId: "G-B4Q77Q3ZB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)