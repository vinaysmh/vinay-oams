//firebase app configs
var firebaseConfig = {
    apiKey: "AIzaSyB5j4xrLBKjKeHRM01-4tnKQKahGS9kG5o",
    authDomain: "adm-sys9.firebaseapp.com",
    projectId: "adm-sys9",
    storageBucket: "adm-sys9.appspot.com",
    messagingSenderId: "932887972109",
    appId: "1:932887972109:web:a8e02d5fb2502c45c80844",
    measurementId: "G-SGW0N4YE5L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//firebase db init
var db = firebase.firestore();

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}