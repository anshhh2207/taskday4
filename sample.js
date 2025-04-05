
var mongoose =require('mongoose');
const sampleschema=mongoose.Schema({
    sName:String,
    sAge:Number,
    sDept:String
})
const sampleModel =mongoose.model("sample",sampleschema);
module.exports=sampleModel;
