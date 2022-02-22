const mongoose = require("mongoose");
// skills schema
const work_schema = new mongoose.Schema(
    {
          image: {
            type: String,
            minlength: 4,
            maxlength: 255,
              },
         name: {
            type: String,
            minlength: 4,
            maxlength: 255,
             },
        url: {
            type: String,
            minlength: 4,
            maxlength: 255,
            },
            
            is_active:{
              type:Boolean,
              default:false,
            }
     }
);
const  work =mongoose.model("work",work_schema);
module.exports =work;