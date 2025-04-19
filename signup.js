import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

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
const db = getFirestore(app);

document.getElementById("signupBtn").addEventListener("click", async () => {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      uid: user.uid,
      createdAt: new Date().toISOString()
    });

    alert("Signup successful!");
    window.location.href = "index.html";
  } catch (error) {
    alert("Signup error: " + error.message);
  }
});
