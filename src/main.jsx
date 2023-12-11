import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUVFWbIga5bO9Ov2sFjdcr7llQiYmK5RM",
  authDomain: "pikiestilo-1c2ce.firebaseapp.com",
  projectId: "pikiestilo-1c2ce",
  storageBucket: "pikiestilo-1c2ce.appspot.com",
  messagingSenderId: "562559293730",
  appId: "1:562559293730:web:3c9c949d5c8b26d4b7ad7b"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render( <App />)
