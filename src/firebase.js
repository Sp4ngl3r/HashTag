import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8zS8QKUhB6HBQsGEvCNKgCedh727Zvco",
  authDomain: "hashtag-ed31b.firebaseapp.com",
  databaseURL: "https://hashtag-ed31b.firebaseio.com",
  projectId: "hashtag-ed31b",
  storageBucket: "hashtag-ed31b.appspot.com",
  messagingSenderId: "672621314737",
  appId: "1:672621314737:web:34bf57a45d480853d35890",
  measurementId: "G-H6PDFFYEXJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
