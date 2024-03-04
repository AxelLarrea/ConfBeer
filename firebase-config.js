import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyAg_RsR-jITKlDYK1MtU4fOhsW0rBtWqHo",
    authDomain: "conf-beer-abafa.firebaseapp.com",
    projectId: "conf-beer-abafa",
    storageBucket: "conf-beer-abafa.appspot.com",
    messagingSenderId: "320800447707",
    appId: "1:320800447707:web:44c397e5b78d7e533a00fe",
    measurementId: "G-V88WBE3CLP"
};

export const fb_app = initializeApp(firebaseConfig);
export const fb_auth = getAuth(fb_app);
export const fb_db = getFirestore(fb_app);

export const getData = async () => {
    const docs = [];
    try {
      const request = await getDocs(collection(fb_db, "Eventos"));

      request.forEach((doc) => {
        
        docs.push({ id: doc.id, ...doc.data() });
      });
    }catch (error) {
      console.error("Error fetching data:", error);
    }

    console.log(docs[0])
    return docs;
  };