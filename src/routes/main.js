const express = require("express");
const todo = require("../model/todo");
const routes = express.Router()


routes.get("/",async(req,res)=>{
    // res.send("hello this website is working")
    const data = await todo.find();
    res.render("index",{data:data});
})

routes.get("/index",(req,res)=>{
    res.render("index");
})


routes.post("/enter-field",async(req,res)=>{
    todo.create({type: `${req.body.value}` });
    res.redirect("/");
})


                // delete todo 
routes.get("/delete/todos/:_id",async(req,res)=>{
    console.log("item is deleted");
    const { _id }  = await req.params ;
    console.log({ _id });

    // res.render('update',{data:{_id}});
    
    try {
        const hello = await todo.deleteOne({_id});
    
    } catch (error) {
        console.log(error);
    }
    res.redirect("/");

})



            // Update todo 
routes.post("/update/todo/:_id",async(req,res)=>{
    console.log("item is udpating");
    const { _id }  = await req.params ;
    console.log({_id});
    console.log(_id);
    // console.log({ _id }); by the params we can find what is they are sending in _id of the database
    // console.log(req.body); my req.body we can see what is form is sending
   

    
        // Try&catch statement is there 
        todo.updateOne(
            {"_id": {_id}},
            {$set:{"type": req.body.value } },
        )
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/')
        })
  

})




module.exports = routes