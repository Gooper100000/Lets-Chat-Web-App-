//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBRq9Kr18qeuJklDOItbCEBTfDeJjJ4X-U",
      authDomain: "kwitter-app-f796a.firebaseapp.com",
      databaseURL: "https://kwitter-app-f796a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-f796a",
      storageBucket: "kwitter-app-f796a.appspot.com",
      messagingSenderId: "764476122894",
      appId: "1:764476122894:web:d7b9f334d4c737d93ed95f",
      measurementId: "G-RVLLWFC9M4"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    
username = localStorage.getItem("username")
roomname = localStorage.getItem("roomname")
function send(){
      msg = document.getElementById("message").value
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = ""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("roomname")
      localStorage.removeItem("username")
       window.location.replace("index.html")
}