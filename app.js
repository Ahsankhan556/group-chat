
// alert("start")
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth ,GoogleAuthProvider,signInWithPopup,signOut ,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4nosRN9-_B0RhwDHllEiBJGu7ykALvvY",
  authDomain: "chat-7942e.firebaseapp.com",
  projectId: "chat-7942e",
  storageBucket: "chat-7942e.appspot.com",
  messagingSenderId: "1092794170402",
  appId: "1:1092794170402:web:b13b7468bf0e9d74825e7b",
  measurementId: "G-Z92NC2V89X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const loginWithGoogleBtn = document.getElementById("loginWithGoogleBtn")
// google start sgin
const signInWithGoogle = ()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    console.log("suss")
    window.location.href="chat.html"
   
  }).catch((error) => {
    console.log("erorr")
  });
}
loginWithGoogleBtn && loginWithGoogleBtn.addEventListener("click",signInWithGoogle)




// app.js
const logoutButton = document.getElementById("logoutButton")
const googlelogout = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    alert("sabass")
    window.location.href="index.html"

  }).catch((error) => {
    // An error happened.
  });
}
logoutButton && logoutButton.addEventListener("click",googlelogout)
