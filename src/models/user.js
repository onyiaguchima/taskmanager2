const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
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
        unique: true,
        type: String,
        validate(email){
            if(!validator.isEmail(email)){
                throw new Error("please enter a valid email")
            }
        }
    }
});

userSchema.statics.findByCredentials = async (email, password)=> {
    const user = await User.findOne({email});
    if(!user){
        throw new Error("unable to login")
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw new Error("unable to login")
    }

    return user;
}

userSchema.pre("save", async function (next){
    const user = this;
    if(user.isModified("password")){
    user.password = await bcrypt.hash(user.password, 8);
    }
    
    console.log(user)

    next();
});


const User = mongoose.model("VipUser", userSchema);

















module.exports = User;