const user = require("../models/user");

exports.searchUser = async (req, res) => {
  let fullName = req.body.fullName;
  const regex = new RegExp(fullName, "i");
console.log(fullName)
  try {
    const d1 = await user.find({
      $or: [
        { first_name: { $regex: regex } },
        { last_name: { $regex: regex } },
      ],
    }).limit(20);

    res.send(d1);
  } catch (err) {
    res.send(err);
  }
};
// $or: [
//     { first_name: { $regex: regex } },
//     { last_name: { $regex: regex } }
//   ]
// }, (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   return result
// });
