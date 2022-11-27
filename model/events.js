const mongoose= require('mongoose')

const EventSchema= new mongoose.Schema({
type:{
    type:String,
    required:true
},
uid:{
    type:Number,
    required:[true,'Must Contain User id'],
    maxLength:3
},
name:{
    type:String,
    
},
tagLine:{
    type:String,
    maxLength:[50,'Tagline cannot contain more than 50 character']
},
timestamps: {
    createdAt: {
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    } 
  },
  description:{
    type:String,
    maxLength:[200,'Description cannot have more than 200 character']
    
},
img:{
    type:[String],
    data:Buffer,
   
},
moderator:String,
category:String,
subCategory:String,
rigorRang:{
    Number:{
        type:Number,
        integer:true
    }
},
attendees:[String]



})

module.exports=mongoose.model('Events',EventSchema) 