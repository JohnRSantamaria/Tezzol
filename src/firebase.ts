// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBbmDSqmiCVwjjj3CGyevBS71ziR4txXHA',
	authDomain: 'tezzol-asesoria.firebaseapp.com',
	projectId: 'tezzol-asesoria',
	storageBucket: 'tezzol-asesoria.appspot.com',
	messagingSenderId: '503865186740',
	appId: '1:503865186740:web:bea9d4fa819b046b23fae1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
	return app;
};
