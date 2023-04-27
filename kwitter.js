function login(){
    user_name = document.getElementById("login_name").value;
 localStorage.setItem("username", user_name);

 window.location = "kwitter_room.html";
}