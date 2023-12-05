const user = require("../models/user");
exports.creaTeam = async (req, res) => {

  const {first_name,last_name,email,gender,domain,available} = req.body;
  try {
    await user.create({
      id: count + 1,
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender:gender,
      avatar:"https://robohash.org/delectusconsectetursed.png?size=50x50&set=set1",
      domain: domain,
      available: available,
    });
    res.send("user created");
  } catch (err) {
    res.send(req.body);
  }
};
