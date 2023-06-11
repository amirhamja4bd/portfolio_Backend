const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            required: true,
          },
          photo: {
            type: String,
            default: 'https://media.licdn.com/dms/image/C5603AQFM-wV_95HBPA/profile-displayphoto-shrink_200_200/0/1642605717330?e=1692230400&v=beta&t=tlQDrLaQ4aaldaCbHmX5GlShXxj3Wv1Tus0gRpYtfWE'
          },
          role:{
            type: Number,
            default: 0,
        },
          social: {
            facebook: {type: String},
            linkedin: {type: String},
            github: {type: String},
            instagram: {type: String},
          }
    }, {timestamps: true , versionKey: false}
);

const User = mongoose.model("User", userSchema);
module.exports =User;