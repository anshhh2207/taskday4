
var mongoose=(require('mongoose'));
mongoose.
connect("mongodb+srv://anshikaa22:anshika@cluster0.puyw8f3.mongodb.net/anshh?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>
    console.log("CONNECTED TO DB")
)
.catch((err)=>{
    console.log(err)
})