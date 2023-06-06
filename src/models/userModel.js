const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            default: 'admin29'
          },
          password: {
            type: String,
            required: true,
            default: 'adminporth29'
          },
    }, {timestamps: true , versionKey: false}
);

const User = mongoose.model("User", userSchema);
module.exports =User;