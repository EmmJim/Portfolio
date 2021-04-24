import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLVrUH98UQ50VcOwZeis66rpHlHqm4UFw",
    authDomain: "portfolio-contact-c41d9.firebaseapp.com",
    projectId: "portfolio-contact-c41d9",
    storageBucket: "portfolio-contact-c41d9.appspot.com",
    messagingSenderId: "123674116964",
    appId: "1:123674116964:web:28bcf5ba0251a48cefb071"
});

var db = firebaseApp.firestore();

export {db}
