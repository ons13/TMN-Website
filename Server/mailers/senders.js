const { email } = require("./config");

const welcomeSender = (recipient, name, code) => {
  console.log("Called in Sender");
  email
    .send({
      template: "welcome",
      message: {
        to: recipient,
      },
      locals: {
        name: name,
        code: code,
      },
    })
    .then(console.log)
    .catch(console.error);
};

/* const forgotPasswordSender = (name, code) => {
   
}; */

module.exports = {
  welcomeSender,
};
