const express = require("express");
const cors = require("cors");



//node server
const app = express();
const port = 3100;

//Config cors
app.use(cors());

//Use the cors middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Data
const {rooms} = require('./data/rooms')

//Create routes
app.get("/rooms", (req, res) => {
    res.send({"rooms" : rooms})
})

app.get("/rooms/:building", (req, res)=> {
    const requestB = req.params.building;
    roomsFiltered = rooms.filter(room => room.building == requestB);
    res.json(roomsFiltered)
})

app.get("/rooms/:building/:id", (req, res)=> {
    const requestID = req.params.id;
    roomsFiltered = rooms.filter(room => room.id == requestID);
    res.json(roomsFiltered)
})


app.put('/rooms/:id',(req, res)=>{
    let index = rooms.findIndex(room => room.id == req.params.id)
    let newRoom = {
        id:req.body.id,
        room:req.body.room,
        building:req.body.building,
        reserves:req.body.reserves
    }
    rooms[index] = newRoom
    res.send("Room Updated" + newRoom.id )
})


//Create server and listen http requests
app.listen(port, () => {
     console.log("server in port: " + port)
})