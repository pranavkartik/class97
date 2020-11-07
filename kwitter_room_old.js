//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBoFwi-4q1qfSEjvkTnxMkrsx8h1838rX0",
      authDomain: "kwitter-681f9.firebaseapp.com",
      databaseURL: "https://kwitter-681f9.firebaseio.com",
      projectId: "kwitter-681f9",
      storageBucket: "kwitter-681f9.appspot.com",
      messagingSenderId: "980209970562",
      appId: "1:980209970562:web:1186b5c37bb47001daf39b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = user_name;

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_name = childKey;
                  //Start code
                  console.log("room name is" + Room_name);
                  row = "<div class = 'room_name' id = " + Room_name + "onclick = 'redirectToRoomName(this.id)'> #" + Room_name + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);         
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}