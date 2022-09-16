const express = require("express");
require("./db/mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.port || 3000;
app.use(express.json());

app.post("/users", (req, res)=>{
   
    const user = new User(req.body);
    user.save().then((saved)=>{
        res.send(saved);
    }).catch((caught)=>{
        res.status(400).send(caught);
    });
});

app.get("/users", (req, res)=>{
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((e)=>{
        res.status(400).send(e);
    })
});

app.get("/users/:id", (req, res)=>{
    User.findById(req.params.id).then((user)=>{
        res.send(user)
    }).catch((e)=>{
        res.send(e)
    })
});


app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
});