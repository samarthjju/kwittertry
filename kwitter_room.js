const firebaseConfig = {
      apiKey: "AIzaSyA-fQ2WDiCrEF9VkGQKyOCNwIuY2OBDSyY",
      authDomain: "kwitter-46ad0.firebaseapp.com",
      databaseURL: "https://kwitter-46ad0-default-rtdb.firebaseio.com",
      projectId: "kwitter-46ad0",
      storageBucket: "kwitter-46ad0.appspot.com",
      messagingSenderId: "199575265443",
      appId: "1:199575265443:web:03cce0ad416219e9cd5f16"
    };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

function addRoom ()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"    
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
document.getElementById("user_name").innerHTML="Welcome" +user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}