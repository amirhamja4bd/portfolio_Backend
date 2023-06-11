const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
class FormHelper {
  isEmpty = (value) => {
    return (
      value === "" ||
      value === undefined ||
      value === null ||
      (value instanceof Array && value.length < 1) ||
      (value instanceof Object && Object.keys(value).length < 1)
    );
  };
}

module.exports = new FormHelper();
