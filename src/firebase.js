import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseconfig = {
  apiKey: "AIzaSyAoiwDMpuh9ODWR2zRSn9iYFLyRWyBBjKY",
  authDomain: "newsday-hightea-project.firebaseapp.com",
  projectId: "newsday-hightea-project",
  storageBucket: "newsday-hightea-project.appspot.com",
  messagingSenderId: "474238518302",
  appId: "1:474238518302:web:02d9468aaa341df833da0f"
};

const app = initializeApp(firebaseconfig)
const db = getFirestore(app)

export default db
