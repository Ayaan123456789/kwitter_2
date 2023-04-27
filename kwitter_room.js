username = localStorage.getItem("username");

document.getElementById("username").innerHTML = username;
console.log(username);

function add_room(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("roomName", room_name);
    firebase.database().ref("/").child(room_name).update ({
        purpose : "adding room name"    
      });
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',function(snapshot) {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'room_name' id =" + Room_names +  " onclick = 'redirectToRoomName(this.id)'> #" + Room_names + " </div><hr>";
      document.getElementById("output").innerHTML += row ;


//End code
});});}
getData();



redirectToRoomName(this.id) {
    window.location = "kwitter_page.html";

    }