import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkk1WaJLzlfByDfWvsFZRU8njGECqwhI8",
  authDomain: "crop-disease-detection-b9c49.firebaseapp.com",
  projectId: "crop-disease-detection-b9c49",
  storageBucket: "crop-disease-detection-b9c49.appspot.com",
  messagingSenderId: "695405762041",
  appId: "1:695405762041:web:c20d3107bc748dbdde5928",
  measurementId: "G-Y2KWPXWQLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const labelDb =getFirestore(app)
const coordinatesDb = getFirestore(app)
const imgDb = getStorage(app)

export {labelDb, coordinatesDb, imgDb}