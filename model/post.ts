import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const PostSchema = new Schema(
  {
    title: {type: String , required:true , unique:true},
    content: {type: String , required:true},
    imgurl: {type: String , required:true},
    date: {type: String , required:true},
    link1: {type: String , required:true},
    link2: {type: String , required:true},
    
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Post", PostSchema);
