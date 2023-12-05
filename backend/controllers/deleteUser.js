const user = require('../models/user');
exports.deleteUser = async(req,res) => {
 const id=req.params.id;
try{
    await user.deleteOne({ id: id });
  
    res.send("user deleted");
}
catch(err){
    console.log(err)
res.send(err);
}
}