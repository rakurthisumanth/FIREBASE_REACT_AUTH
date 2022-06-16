import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCns0Z6lMYcUkpP4JxD5NVeQIL3-hWuhaE",
  authDomain: "forms-eee77.firebaseapp.com",
  projectId: "forms-eee77",
  storageBucket: "forms-eee77.appspot.com",
  messagingSenderId: "607199923875",
  appId: "1:607199923875:web:d78db04611128d4d07b916"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth()