import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import {  doc} from "firebase/firestore"; 
import { getFunctions } from 'firebase/functions';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFDm_iZ6mxEFR_MrJHj0j2w1QRont3Vu4",
  authDomain: "my-r-project-c6a30.firebaseapp.com",
  projectId: "my-r-project-c6a30",
  storageBucket: "my-r-project-c6a30.appspot.com",
  messagingSenderId: "384081440114",
  appId: "1:384081440114:web:3044464ad3aeab88c601eb",
  measurementId: "G-VNDX7E6BKP"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const functions= getFunctions(firebaseApp)
const storage= getStorage(firebaseApp)

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



onAuthStateChanged(auth,user => {
  if(user!=null) {
    console.log("logged in!")
  } else {
    console.log("No user.")
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode> 
      <App storage={storage} auth={auth} db={db} docTopPromise={docTopPromise} getDocumentById={getDocumentById} functions={functions}/> 
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
