import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username :{
    type : String,
    required : [true,"Please add the user name"]
  },
  email :{
    type : String,
    required : [true,"Please add email id"],
    unique :[true, "Email address already taken"]
  },
  password :{
    type : String,
    required : [true,"Please add user password"],
  },
},{timestamp : true});


export const User = mongoose.model("User",userSchema)
