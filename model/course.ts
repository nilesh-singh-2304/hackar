import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const CourseSchema = new Schema(
  {
    name: {type: String , required:true , unique:true},
    price: {type: String , required:true},
    videos: {type: Array },
    reference: {type: String },
    launch: {type: String , required:true},
    imgurl: {type: String , required:true},
    
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Course", CourseSchema);
