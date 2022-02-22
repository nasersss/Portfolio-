const mongoose = require("mongoose");
// skills schema
const skills_schema = new mongoose.Schema({
    
      name: {
        type: String,
        minlength: 4,
        maxlength: 255,
          },
      Number: {
        type: Number,
       }
       ,
       is_active:{
        type:Boolean,
        default:false,
      }
});
const  skill =mongoose.model("skill",skills_schema);
module.exports =skill;