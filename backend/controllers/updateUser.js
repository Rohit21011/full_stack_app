const user = require("../models/user");
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, gender, domain, available, email } = req.body;
  try {
    await user.updateOne(
      { id: id },
      {
        $set: {
          first_name: first_name,
          last_name: last_name,
          gender: gender,
          domain: domain,
          available: available,
          email: email,
        },
      }
    );
    res.send("user updated ");
  } catch (err) {
    res.send(err);
  }
};
