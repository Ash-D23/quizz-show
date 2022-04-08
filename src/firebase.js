import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADANRgGj4k4eCbSWAMPXSkZUPa8ixOvWA",
  authDomain: "quizz-show.firebaseapp.com",
  projectId: "quizz-show",
  storageBucket: "quizz-show.appspot.com",
  messagingSenderId: "893473381353",
  appId: "1:893473381353:web:03deb2a35a2e6bc83e8978"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.database()