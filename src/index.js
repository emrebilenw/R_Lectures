import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import { collection, getDocs, query, onSnapshot, orderBy } from "firebase/firestore"; 
import {  doc} from "firebase/firestore"; 
import { getFunctions } from 'firebase/functions';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const functions= getFunctions(firebaseApp)
const storage= getStorage(firebaseApp)

const docTopPromiseOrdered = async (Collection, database) => {
  return new Promise((resolve, reject) => {
    let dataObjects = [];
    const colRef = collection(database, Collection)
    const q = query(colRef, orderBy("createdAt"))
    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const dataObject = {
          id: doc.id,
          data: doc.data()
        };
        dataObjects.push(dataObject);
      });
      console.log(dataObjects); // Anlık verileri görmek için
      resolve(dataObjects); // Promise'i çözerek verileri döndür
    }, (error) => {
      console.error("Error getting data:", error);
      reject(error); // Hata durumunda Promise'i reddet
    });
  });
}

const docTopPromise=async (Collection,database)=>{
  let dataObjects = [];
  const querySnapshot = await getDocs(collection(database, Collection));
  querySnapshot.forEach((doc) => {
    const dataObject = {
      id: doc.id,
      data: doc.data()
    };
    dataObjects.push(dataObject);
});
console.log(dataObjects)
return dataObjects
}

const getDocumentById = async (Collection, database, documentId) => {
  try {
    const docRef = doc(collection(database, Collection), documentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return {
        id: docSnapshot.id,
        data: docSnapshot.data()
      };
    } else {
      console.log("Belirtilen belge bulunamadı.");
      return null;
    }
  } catch (error) {
    console.error("Belge alınamadı:", error.message);
    return null;
  }
};





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode> 
      <App storage={storage} auth={auth} db={db} docTopPromise={docTopPromise} getDocumentById={getDocumentById} functions={functions} docTopPromiseOrdered={docTopPromiseOrdered}/> 
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
