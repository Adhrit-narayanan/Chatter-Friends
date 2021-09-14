//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBlAM1MNnCRuWYREuZtX8sU1REX370kcqk",
      authDomain: "kwetter-3fb03.firebaseapp.com",
      databaseURL: "https://kwetter-3fb03-default-rtdb.firebaseio.com",
      projectId: "kwetter-3fb03",
      storageBucket: "kwetter-3fb03.appspot.com",
      messagingSenderId: "453555206805",
      appId: "1:453555206805:web:0846ab8db2a19488d1b99c"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function send(){
      msg=document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
            name:user_name,
            massege:msg,
            like:0,
      })
}