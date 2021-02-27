import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDF3myThrBAso2lOhMso0DWNkgn4NrKnvM",
    authDomain: "react-slack-fddc2.firebaseapp.com",
    databaseURL: "https://react-slack-fddc2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-slack-fddc2",
    storageBucket: "react-slack-fddc2.appspot.com",
    messagingSenderId: "704768321771",
    appId: "1:704768321771:web:86886896e0e0a98e59f6ae",
    measurementId: "G-LNHB5RK8ZZ"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

