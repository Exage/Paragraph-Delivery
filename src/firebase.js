import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyASoisDyyDyyNM23ypRAsBkn6B6ZyXmAmc",
    authDomain: "paragraph-delivery.firebaseapp.com",
    projectId: "paragraph-delivery",
    storageBucket: "paragraph-delivery.appspot.com",
    messagingSenderId: "712240151592",
    appId: "1:712240151592:web:e30fe167745da6f5edc91d"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)