 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;
const Profolio_schema = new Schema({
  name: {
    required: true,
    type: String,
    minlength: 4,
    maxlength: 100,
  },
  logo: {
    type: String,
    minlength: 2,
    maxlength: 255,
    },
  about_person: {
    type: String,
    minlength: 4,
    maxlength:1000,
    required: true,
  },
  images_person: [{
      type:String
  }]
 ,
  skills :[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Skill",
  }],
  serveces:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Servece",
}],
works:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Work",
}],
contacts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Contact",
}],
    is_active:{
      type:Boolean,
      default:false,
    }
});
Profolio_schema.methods.addSkill= async function (SkillID)
{
  if(!this.skills.includes(SkillID))
  this.skills.push(SkillID);
}
Profolio_schema.methods.removeSkill= async function (SkillID)
{
  if(!this.skills.includes(SkillID))
  this.skills.remove(SkillID);
}


Profolio_schema.methods.addServece= async function (ServeceID)
{
  if(!this.serveces.includes(ServeceID))
  this.serveces.push(ServeceID);
}
Profolio_schema.methods.removeServece= async function (ServeceID)
{
  if(!this.serveces.includes(ServeceID))
  this.serveces.remove(ServeceID);
}
Profolio_schema.methods.addServece= async function (ServeceID)
{
  if(!this.serveces.includes(ServeceID))
  this.serveces.push(ServeceID);
}
Profolio_schema.methods.removeServece= async function (ServeceID)
{
  if(!this.serveces.includes(ServeceID))
  this.serveces.remove(ServeceID);
}

const protflio =mongoose.model("protflio",Profolio_schema);
module.exports=protflio; 