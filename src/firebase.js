// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDRNNyJLYHVIWn-rtGEE9bvjOL5yYfEtYI",
	authDomain: "eshop-photos.firebaseapp.com",
	projectId: "eshop-photos",
	storageBucket: "eshop-photos.appspot.com",
	messagingSenderId: "982340193134",
	appId: "1:982340193134:web:759f300cfeee47dce88f7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);
