const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/mongoosetask", {
    useNewUrlParser: true,
    // useCreateIndex: true
});

// const Task = mongoose.model("players", {
//     name: {
//         type: String,
//         validate(value){
//             if(!value){
//                 throw new Error("A name field is required")
//             }
//         }
//     },
//     age: {
//         type: Number,
//         validate(value){
//             if(value<0){
//                 throw new Error("Age should be sacrosanct")
//             }
//         }
//     },
//     description: {
//         type: String
//     },

//     email: {
//         type: String,
//         required: true,
//         validate(email){
//             if(!validator.isEmail(email)){
//                 throw new Error("The email you entered is not valid");
//             }
//         }
//     }
// });

// const me = new Task({
//     name: "clarice",
//     age: 3,
//     description: "worker",
//     email: "clarice@gmail.com"
// });

// me.save().then((me)=>{
//     console.log(me);
// });




