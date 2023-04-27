// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCSSMyO04UAlfOk9B_3KJBxX7TNrnzFUJM",
    authDomain: "lets-chat-777ef.firebaseapp.com",
    databaseURL: "https://lets-chat-777ef-default-rtdb.firebaseio.com",
    projectId: "lets-chat-777ef",
    storageBucket: "lets-chat-777ef.appspot.com",
    messagingSenderId: "43323549875",
    appId: "1:43323549875:web:d6ec67eca8f6259e74a8c6"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



