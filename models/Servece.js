const mongoose = require("mongoose");
// skills schema
const servece_schema =new mongoose.Schema(
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
             description: {
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
const  servece =mongoose.model("servece",servece_schema);
module.exports =servece;