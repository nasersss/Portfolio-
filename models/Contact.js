const mongoose = require("mongoose");
const Schema=mongoose.Schema;
// skills schema
const contact_schema =new mongoose.Schema(
    {
        image: {
          type: String,
          minlength: 4,
          maxlength: 255,
            }
            ,
            is_active:{
              type:Boolean,
              default:false,
            }
     }
);
const  contact =mongoose.model("skill",contact_schema);
module.exports =contact;