
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCC60LNSdZlCdnDAxprBwQ1Tmq_QkRwrS0",
    authDomain: "food-hut-6a0ca.firebaseapp.com",
    projectId: "food-hut-6a0ca",
    storageBucket: "food-hut-6a0ca.appspot.com",
    messagingSenderId: "388792814504",
    appId: "1:388792814504:web:4a7aa32814811252c5ab9d",
    measurementId: "G-FCJTDFSE6D"
  };
  const app = initializeApp(firebaseConfig);

  export default app;