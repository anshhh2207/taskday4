var express = require('express');
 var app=express();
 var port=4000;
 require('./db');
 var sModel1= require('./sample')
 app.use(express.json())
 //  middleware
 //  api to add data to db
 app.post('/',(req,res)=>{
     try {
         sModel1(req.body).save();
         res.send("Data added")
     } catch (error) {
         res.send(error)
     }
 })
 app.get('/',async(req,res)=>{
     try {
         var data=await sModel1.find();
         res.send(data)
     } catch (error) {
         res.send(error)
     }
 })   
 // to delete
 app.delete('/:id',async(req,res)=>{
     try {
         console.log(req.params.id)
         await sModel1.findByIdAndDelete(req.params.id);
         res.send("Data deleted")
     } catch (error) {
         res.send(error)
     }
 })     
 app.put('/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await sModel1.findByIdAndUpdate(req.params.id,req.body);
        res.send("data edited")
      
    } catch (error) {
        res.send(error)
    }
}
)   
 

 app.listen(port,()=>{
    console.log(`Server is up and running in${port}`)
})