// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Virtual-Closet Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgo5qcgTXgCEYtWRRSOUD7v04UrcCIohg",
  authDomain: "image-gallery-453a9.firebaseapp.com",
  projectId: "image-gallery-453a9",
  storageBucket: "image-gallery-453a9.appspot.com",
  messagingSenderId: "493970181091",
  appId: "1:493970181091:web:79d95e7bcfa227517beed6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };
