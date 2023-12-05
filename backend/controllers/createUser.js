const user = require("../models/user");
exports.createUser = async (req, res) => {
  const count = await user.countDocuments({});
console.log(req.body)

  const {first_name,last_name,email,gender,domain} = req.body;
  try {
    await user.create({
      id: count + 1,
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender:gender,
      avatar:"https://robohash.org/delectusconsectetursed.png?size=50x50&set=set1",
      domain: domain,
      available: true,
    });
    res.send("user created");
  } catch (err) {
    res.send(err);
  }
};
