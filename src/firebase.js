import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfODhYHcdnQRDpEREqTa33d2ywN6sMJ0U",
    authDomain: "twitter-clone-cba83.firebaseapp.com",
    projectId: "twitter-clone-cba83",
    storageBucket: "twitter-clone-cba83.appspot.com",
    messagingSenderId: "1086739686157",
    appId: "1:1086739686157:web:bb49ec2df08e7db1f70644"
  };




  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

export default db;