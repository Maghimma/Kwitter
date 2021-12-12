var firebaseConfig = {
  apiKey: "AIzaSyBbbZ4Pd8LC6061p9CQz9PXZuHUy_13g9Q",
  authDomain: "kwitter-1224.firebaseapp.com",
  databaseURL: "https://kwitter-1224-default-rtdb.firebaseio.com",
  projectId: "kwitter-1224",
  storageBucket: "kwitter-1224.appspot.com",
  messagingSenderId: "275368705870",
  appId: "1:275368705870:web:164e14b89b7ed73a12281f"
};
firebase.initializeApp(firebaseConfig);

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "room.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}