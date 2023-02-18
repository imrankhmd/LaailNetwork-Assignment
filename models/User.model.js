const mongoose = require("mongoose");


import mongoose,{Document} from "mongoose";

const userSchema= new mongoose.Schema<User>({
    name: {type:String,required:true},
    mobile:{type: Number,required:true},
    count:{type:Number,default:0},
    Total:{type: Number,default:0}
  })
const UserModel = mongoose.model("user", userSchema)
module.exports = UserModel;
