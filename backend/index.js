const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConnect = require("./config/database");
dbConnect();



const router = require("./routes/routes");
const PORT = process.env.PORT || 3000
//  app.use("/home",routes);
app.use("/",router);
app.use("/search",router)
app.use("/delete",router)
app.use("/update",router)
app.use('/create',router)
app.use("/filter",router)
app.listen(PORT,()=>{
    console.log("server running")
});


