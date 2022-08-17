import firebase from 'firebase/app'
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4cjhz3KvMY1jGvdCPQkS_6K4uUPnwcxw",
  authDomain: "fir-crud-react-c8dfe.firebaseapp.com",
  projectId: "fir-crud-react-c8dfe",
  storageBucket: "fir-crud-react-c8dfe.appspot.com",
  messagingSenderId: "13840980118",
  appId: "1:13840980118:web:9c1c37c5a0c56a7a394ab7"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore()