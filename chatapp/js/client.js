
const socket = io("http://localhost:8000");

const form = document.getElementById("send-container")
const messageinput = document.getElementById("messageinp")

// jb bhi messages aye to container m dalne h
const messagecontainer = document.querySelector(".container")
var audio= new Audio('sharingan.mp3')

const append = (message, position) => {
    const messageelement = document.createElement("div")
    messageelement.innerText = message;
    messageelement.classList.add("message")
    messageelement.classList.add(position)
    messagecontainer.append(messageelement)
    if(position=="left"){
        audio.play();
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageinput.value;
    append(`you ${message}`, "right");
    socket.emit("send", message);
    messageinput.value = ""
})
// y event chlane pr index.js isko lelega yaani y naam jo enter krenge vo index.js p chla jayega
const name = prompt("Your Name ?")
socket.emit("new-user-joined", name)

// user n join kra aur kaha pr right m
socket.on("user-joined", name => {
    append(`${name} has joined the clan`, "right")
})
socket.on("received", data => {
    append(`${data.name}: ${data.message}`, "left")
})
socket.on("left", name => {
    append(`${name}: has been isekaid`, "right")
})


