const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect("mongodb+srv://rpdeveloper:0i9Y1mcs73sN64zg@cluster1.i94po0i.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("connection successful"))
    .catch((error)=>console.log(error));
    
   
}
module.exports = dbConnect;