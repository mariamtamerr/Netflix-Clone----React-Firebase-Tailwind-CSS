// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBYUVLR29NWC5ROU48hMpi4hhf5JNkUt-Y",
//   authDomain: "netflix-24e4a.firebaseapp.com",
//   projectId: "netflix-24e4a",
//   storageBucket: "netflix-24e4a.appspot.com",
//   messagingSenderId: "789554020276",
//   appId: "1:789554020276:web:5998a4d51598d8b63a7ce1"
// };

const app = initializeApp(firebaseConfig);
// export default auth = getAuth(app);
export const auth = getAuth(app);


