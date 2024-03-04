import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";



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

const auth = getAuth(firebaseApp)


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
      <App auth={auth}/> 
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
