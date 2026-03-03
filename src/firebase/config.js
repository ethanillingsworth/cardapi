// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDtmB3jHRaKM8-OFP6GlyJPuOMvoXm_j3U",
	authDomain: "carder-db.firebaseapp.com",
	projectId: "carder-db",
	storageBucket: "carder-db.firebasestorage.app",
	messagingSenderId: "383524042607",
	appId: "1:383524042607:web:59f3e05573aefc8fed5a9a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
