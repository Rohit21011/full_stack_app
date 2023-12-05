const user = require("../models/user");

exports.filterUser = async (req, res) => {
    const { domain, gender, available } = req.body;
  console.log(req.body)
    const filter = {};
 
    if (domain) {
      filter.domain = domain;
    }
  
    if (gender) {
      filter.gender = gender;
    }
  
    if (available !== undefined) {
      filter.available = JSON.parse(available);
    }
    
    try {
        const d1 = await user.find(filter);
    
        res.send(d1);
      } catch (err) {
        res.send(err);
      }
};

