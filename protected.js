import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCS0Y56xVN0HyXdsSTCwIyIoXEQpboHRUc",
  authDomain: "foodrecipe-bdd97.firebaseapp.com",
  projectId: "foodrecipe-bdd97",
  storageBucket: "foodrecipe-bdd97.appspot.com",
  messagingSenderId: "500578925809",
  appId: "1:500578925809:web:fb87f96565758982e2fd50"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmail").innerText = `Logged in as: ${user.email}`;
  } else {
    window.location.href = "login.html";
  }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", async () => {
  await signOut(auth);
  alert("Logged out!");
  window.location.href = "login.html";
});
