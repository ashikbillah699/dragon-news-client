// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgyoiN5iOCJN8rBjVmH0XN9aRrFQwt0mU",
    authDomain: "daragon-news-client.firebaseapp.com",
    projectId: "daragon-news-client",
    storageBucket: "daragon-news-client.appspot.com",
    messagingSenderId: "190073182138",
    appId: "1:190073182138:web:86b0bc059675eabc0faf83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;