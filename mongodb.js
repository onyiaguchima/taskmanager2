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

    db.collection("users").findOne({name: "niya"}, (error, user)=>{
        if(error){
            return console.log("an error was encountered")
        }

        console.log(user);
    })

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

    // db.collection("players").insertMany([{club: "wolve", role: "striker", number: 9, name: "raul", goals: 30}, {club: "chelsea", role: "striker", number: 9, name: "sterling", goals: 11}], (error, response)=>{
    //     if(error){
    //         return console.log("an error was encountered")
    //     }
    //     console.log(result)
    // });
}); 

