
// this will handle socket io
const io = require("socket.io")(8000)

const user = {}
// jese hi connection aye socket func ko run krdo
// y soket connections h jese harry n connectkia mne connect kia shanu n kia y soket connections ko listen krgea
// socket.on ek perticular connection ko listen krgea jese gotiya n join kra aur y user m append krdega naam dekar
// socket brodcast new bnde ko chor k purane jko chat m h unko bta degas user n join kra h
// send connection y sb ek event h y custome name h
io.on("connection", socket => {
    socket.on("new-user-joined", name => {
        user[socket.id] = name;
        socket.broadcast.emit("user-joined", name);
    })
    socket.on("send", message => {
        socket.broadcast.emit("received", { message: message, name: user[socket.id] })
    })
    socket.on("disconnect", message => {
        socket.broadcast.emit("left", user[socket.id])
        delete user[socket.id]
    })
  
})