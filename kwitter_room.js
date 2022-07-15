
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBE1cCthPm9B7pXO9FfRzkVQZ6WyWyaI4w",
      authDomain: "kwitter-32fb7.firebaseapp.com",
      databaseURL: "https://kwitter-32fb7-default-rtdb.firebaseio.com",
      projectId: "kwitter-32fb7",
      storageBucket: "kwitter-32fb7.appspot.com",
      messagingSenderId: "700836887153",
      appId: "1:700836887153:web:1500cc2c869854f7fb39d0"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
