const mongoose = require('mongoose');
const validator= require('validator');
const bcrypt = require('bcryptjs');
const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required:[ true, "Enter Your Name"]
    },
    email: {
        type: String,
        required: [true, "Enter Your Email"],
        unique: true,
        lowercase:true,
        validate:[validator.isEmail,"Please Enter valid Email"]

    },
   photo: String,
   password: {
    type: String,
    requrired: [true, "Enter Your Password"],
    minLength:8
   },
   passwordConfirm:{
    type: String,
    requrired:[true, "Enter Your Confirm Password"],
    minLength:8,
    validate: {
        // this only works on CREATE and SAVE!!
        validator: function(el){
            return el=== this.password;
        },
        message: "password are not same"
    }
   }
})
userSchema.pre('save',async function(next){
 if(!this.isModified('password'))return next();
 this.password= await bcrypt.hash(this.password,12)
   this.password= undefined;
})

module.exports=mongoose.model('Users',userSchema) 