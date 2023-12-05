const user = require('../models/user');
exports.getUser = async(req,res) => {
    const { page} = req.query;
    console.log(page)
    const pageNumber = parseInt(page);
    const startIndex = (pageNumber - 1) * 20;
try{
    const paginatedData = await user.find().skip(startIndex).limit(20)
  
    const totalItems = await user.countDocuments();
    const totalPages = Math.ceil(totalItems / 20);
    res.json({
        results: paginatedData,
        totalPages,
      });
}
catch(err){
res.send(err);
}
}