const mongodb = require("mongodb");
const {MongoClient} = mongodb;
const connectionurl = "mongodb://127.0.0.1:27017";
const databasename = "taskmanager2";

MongoClient.connect(connectionurl, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log("unable to connect to database")
    }

    const db = client.db(databasename);
    // db.collection("users").insertOne({
    //     name: "chima",
    //     age: 39,
    //     nationality: "Nigerian"
    // }, (error, result)=>{
    //     if(error){
    //         return console.log("unable to connect")
    //     }

    //     console.log(result);
    // });

    db.collection("players").insertMany([{club: "wolve", role: "striker", number: 9, name: "raul", goals: 30}, {club: "chelsea", role: "striker", number: 9, name: "sterling", goals: 11}], (error, response)=>{
        if(error){
            return console.log("an error was encountered")
        }
        console.log(result)
    });
}); 

