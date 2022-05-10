import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCJY7-qhfypa70Wx-gjZ7hd0hja84fxidA",
    authDomain: "discord-clone-db.firebaseapp.com",
    projectId: "discord-clone-db",
    storageBucket: "discord-clone-db.appspot.com",
    messagingSenderId: "119463782030",
    appId: "1:119463782030:web:6a88a035375b1e35eb8bdf"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;