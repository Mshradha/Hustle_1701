const express = require("express");

// const cors = require('cors');


const UserModel = require("./Modals/User.Modals.js");
const connect  = require("./configs/dbss.js");
const app = express();
app.use(express.json());




app.get("/", async (req, res) => {
    const hello = req.body.hello;


if(req.body == "Hello Welcome To Masai?"){
    const clients = await UserModel.find({},{_id:0,hello:1});
        res.send(clients)
}
//   if(req.headers == "About"){
//     console.log("About")
//   }
//   console.log(req.body.About)
//     console.log(req)
    const About = req.body.About
    const Courses = req.body.Courses
    const Fees = req.body.Fees
    const ISA = req.body.ISA
    const Curriculam  = req.body.Curriculam ;
    const Placement = req.body.Placement
    if(req.body == About){
      
    }
    if(req.body.About == "Tell me something about Masai School?"){
        const clients = await UserModel.find({},{_id:0,About:1});
        res.send(clients)
    }
   else if(req.body.Courses == "What are the courses?"){
        const clients = await UserModel.find({},{_id:0,Courses:1});
        res.send(clients)
    }
    else if(req.body.Fees == "Fee Structure"){
        const clients = await UserModel.find({},{_id:0,Fees:1});
        res.send(clients)
    }
    else if(req.body.ISA == "What is ISA?"){
        const clients = await UserModel.find({},{_id:0,ISA:1});
        res.send(clients)
    }
   
    else if(req.body.Curriculam == "Curriculam?"){
        const clients = await UserModel.find({},{_id:0,Curriculam :1});
        res.send(clients)
    }
    else if(req.body.Placement == "Did Masai offer Placement?"){
        const clients = await UserModel.find({},{_id:0,Placement:1});
        res.send(clients)
    }
    else{
        res.send("invalid")
    }

   
   
});

app.listen(3000,async()=>{
    try {
        await connect
        console.log("connect")
    } catch (error) {
        console.log("error")
    }
})