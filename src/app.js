const express = require("express")
const app = express()
const mongoose = require("mongoose")
// const localhost = "127.0.0.1" 
const routes = require('./routes/main')
const hbs = require('hbs')
// it is going to find the file in tht views folder 
const bodyParser = require("body-parser")
hbs.registerPartials("views/partials")
// order to be maintain
// it en code the data to incripted formate
app.use(bodyParser.urlencoded({
    extended:true
}))

// we can use public resource in public 
app.use("/static",express.static('public'))
// all the main route is in the file router 


app.set("view engine",'hbs')
app.set('views','views')

// mongodb+srv://lakshya:<password>@todo.u8ehbeu.mongodb.net/test
mongoose.connect('mongodb+srv://lakshya:lakshya@todo.u8ehbeu.mongodb.net/test',()=>{
    console.log("db connect hello my friends ");
    console.log("this is the app.js dp is running fine");
})
.then(()=>{
    console.log("hello this is db");
}).catch((e)=>{
    console.log(e);
})
// mongoose.connect('mongodb://127.0.0.1:27017/todo',()=>{
//     console.log("db connect hello my friends ");
//     console.log("this is the app.js dp is running fine");
// })
// .then(()=>{
//     console.log("hello this is db");
// }).catch((e)=>{
//     console.log(e);
// })



// const route = require("./routes/main");
app.use("",routes)

app.listen(5510 | process.env.PORT,()=>{
    console.log(`sever started ${5510}`);
})



