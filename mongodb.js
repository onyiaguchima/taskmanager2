const mongodb = require("mongodb");
const {MongoClient, ObjectId} = mongodb;
const connectionurl = "mongodb://127.0.0.1:27017";
const databasename = "taskmanager2";
// const id = new ObjectId()
// console.log(id);
// console.log(id.getTimestamp())

MongoClient.connect(connectionurl, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log("unable to connect to database")
    }

    const db = client.db(databasename);

     db.collection("users").insertMany([{club: "wolve", role: "striker", name: "raul", goals: 30}, {club: "chelsea", role: "striker", number: 9, name: "sterling", goals: 11}], (error, response)=>{
        if(error){
            return console.log("an error was encountered")
        }
        console.log(response);
    });

    // db.collection("users").deleteOne({age: 39}).then((response)=>{
    //     console.log(response)
    // }).catch((e)=>{
    //     console.log(`sorry, but an error: ${e} was encountered`)
    // })

    // db.collection("users").findOne({name: "chima"}, (error, user)=>{
    //     if(error){
    //         return console.log("an error was encountered")
    //     }

    //     console.log(user);
    // });

    // db.collection("users").updateOne({_id: new ObjectId("631f006bf19443b799650aa0")

    // },
    //     {
    //         $set: {
    //             name: "vladimir"
    //         }
    //     }).then((result)=>{
    //         console.log(result)
    //     }).catch((e)=>{
    //         console.log("error:", e)
    //     });
       

    // db.collection("users").insertOne({
    //     _id: id,
    //     name: "Wizzy",
    //     age: 39,
    //     nationality: "Nigerian"
    // }, (error, result)=>{
    //     if(error){
    //         return console.log("unable to connect")
    //     }

    //     console.log(result);
    // });

   
}); 

