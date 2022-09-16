const mongoose = require("mongoose");
const validator = require("validator");
// const { number } = require("yargs");

const User = mongoose.model("VipUser", {
    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        minLength:  4
    },
    
    email: {
        type: String,
        validate(email){
            if(!validator.isEmail(email)){
                throw new Error("please enter a valid email")
            }
        }
    }
});

















module.exports = User;