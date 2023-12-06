const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("connection successful"))
    .catch((error)=>console.log(error));
    
   
}
module.exports = dbConnect;
