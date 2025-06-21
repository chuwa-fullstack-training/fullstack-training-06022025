const { Company } = require("./schema");
const mongoose = require("./connect");

const company = new Company({
  name: "Google",
  description: "Hello World",
  headquarters: "Bay Area",
  industry: "Internet",
  _employees: [],
});

company
  .save()
  .then(() => {
    console.log("Created new company");
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
