import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBJembLgvSP0poimo9zsoOvMQRNl-NTJSI",
    authDomain: "touchbase-b0318.firebaseapp.com",
    databaseURL: "https://touchbase-b0318-default-rtdb.firebaseio.com",
    projectId: "touchbase-b0318",
    storageBucket: "touchbase-b0318.appspot.com",
    messagingSenderId: "831244635014",
    appId: "1:831244635014:web:890956c21c55afeaec7a07",
    measurementId: "G-B7G724B7XL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;