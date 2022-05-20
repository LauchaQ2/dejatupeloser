import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvPKt44lukN5pRrOigKssqLnJY9LHXf10",
  authDomain: "deja-tu-pelo-ser.firebaseapp.com",
  projectId: "deja-tu-pelo-ser",
  storageBucket: "deja-tu-pelo-ser.appspot.com",
  messagingSenderId: "1031608999011",
  appId: "1:1031608999011:web:9a1fd4e89576ea5fceec56"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;