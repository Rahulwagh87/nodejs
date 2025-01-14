const { serve } = require("swagger-ui-express");
const usersService = require("../services/users.service");

exports.register = (req, res, next) => {
  // Validation area
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    password: req.body.password,
  };

  console.log("controller data", data);
  usersService.register(data, (error, results) => {
    console.log("controller results", results);
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.login = (req, res, next) => {
  // Validation area
  const data = {
    emailId: req.body.emailId,
    password: req.body.password,
  };
  usersService.login(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

// exports.login = (req, res, next) => {
//   console.log(res);
//   var data = {
//     emailId: req.body.emailId,
//     password: req.body.password,
//   };

//   usersService.login =
//     (data,
//     (error, result) => {
//       if (error) {
//         return res.status(400).send({ success: 0, data: "bad request" });
//       }
//       return res.status(200).send({
//         success: 1,
//         data: result,
//       });
//     });
// };
