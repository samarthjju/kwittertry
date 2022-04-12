
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-fQ2WDiCrEF9VkGQKyOCNwIuY2OBDSyY",
  authDomain: "kwitter-46ad0.firebaseapp.com",
  databaseURL: "https://kwitter-46ad0-default-rtdb.firebaseio.com",
  projectId: "kwitter-46ad0",
  storageBucket: "kwitter-46ad0.appspot.com",
  messagingSenderId: "199575265443",
  appId: "1:199575265443:web:03cce0ad416219e9cd5f16"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
  });
}
