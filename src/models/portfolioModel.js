const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  file: {
    public_id: {type: String , required: true },
    secure_url: {type: String , required: true },
  },
  image: {
    public_id: { type: String  },
    secure_url: { type: String  },
  },
  // file: {
  //   public_id: {type: String , required: true },
  //   secure_url: {type: String , required: true },
  // },
  // image: {
  //   public_id: { type: String  , required: true },
  //   secure_url: { type: String  , required: true },
  // },
  social: {
    facebook: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
  },
},  
{timestamps: true, versionKey:false}
);

const aboutSchema = new mongoose.Schema({
  image: {
    public_id: { type: String },
    secure_url: { type: String },
  },
  welcomeText: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},  
{timestamps: true, versionKey:false}
);

const servicesSchema = new mongoose.Schema({
  image: {
    public_id: { type: String },
    secure_url: { type: String },
  },
  serviceName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},  
{timestamps: true, versionKey:false}
);

const skillSchema = new mongoose.Schema({
  technicalSkills: {
    skillName: { 
      type: String ,
      required: true,
    },
    percent: { 
      type: String ,
      required: true,
    },
  },
  professionalSkills: {
    skillName: { 
      type: String ,
      required: true,
    },
    percent: { 
      type: String ,
      required: true,
    },
  },
},  
{timestamps: true, versionKey:false}
);

const experienceSchema = new mongoose.Schema({
  
  count: {
    type: String,
    required: true,
  },
  title1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: true,
  },
},  
{timestamps: true, versionKey:false}
);

const projectsSchema = new mongoose.Schema({
  thumbnail: {
    public_id: { type: String },
    secure_url: { type: String },
  },
  image: [
    {
      public_id: { type: String },
      secure_url: { type: String },
    },
  ],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technology: { type: Array },
  type: {
    type: String,
    enum: ["team", "personal"],
    default: "",
  },
  liveLink: {
    type: String,
    required: true,
  },
  githubClient: {
    type: String,
  },
  githubServer: {
    type: String,
  },
  social: {
    facebook: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
  },
},  
{timestamps: true, versionKey:false}
);

const testimonialSchema = new mongoose.Schema({
  image: [
    {
      public_id: { type: String },
      secure_url: { type: String },
    },
  ],
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
  },
  age: {
    type: String,
  },
  address: {
    type: String,
  },
},  
{timestamps: true, versionKey:false}
);

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},
    
{timestamps: true, versionKey:false}
);

module.exports = {
  Intro: mongoose.model("Intros", introSchema),
  About: mongoose.model("Abouts", aboutSchema),
  About: mongoose.model("Services", servicesSchema),
  Experience: mongoose.model("Experiences", experienceSchema),
  Project: mongoose.model("Projects", projectsSchema),
  Course: mongoose.model("Skills", skillSchema),
  Contact: mongoose.model("Testimonials", testimonialSchema),
  Contact: mongoose.model("Contacts", contactSchema),
};
