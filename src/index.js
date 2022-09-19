const bcrypt = require("bcrypt");
const express = require("express");
const { updateStrings } = require("yargs");
require("./db/mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.port || 3000;
app.use(express.json());

app.post("/users", (req, res)=>{
   
    const user = new User(req.body);
    user.save().then((saved)=>{
        res.send("your code has been saved human");
    }).catch((caught)=>{
        res.status(400).send(caught);
    });
});

app.post("/users/login", async (req, res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password);
        res.send(user);
    }

    catch(e){
        res.status(400).send()

    }
})

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

app.patch("/users/:id", async (req, res)=>{

    const updates = Object.keys(req.body);
    const allowedupdates = ["name", "age", "password", "email"]
    const isvalidoperation = updates.every((update)=>{
        return allowedupdates.includes(update);
    })

    if(!isvalidoperation){
        return res.status(400).send({error: "invalid operation"})
    }

   try{
    
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    const user = await User.findById(req.params.id);
    updates.forEach((update)=> user[update] = req.body[update]);

    await user.save();
    
    if(!user){
        return res.status(404).send();
    }
    res.send(user);
}
    catch(e){
        res.status(400).send(e)
    }
});

app.delete("/users/:id", async (req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    }
    catch(e){
        console.log(e)
        res.status(500).send(e)
    }
});


app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});