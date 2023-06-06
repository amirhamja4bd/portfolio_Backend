const User=require('../models/userModel');

exports.login = async (req, res ) =>{
    try{
    const { userName, password } = req.body;
    if(!userName){
        return res.json({ error:"User Name is Required"})
    }
    if(!password || password.length <6){
        return res.json({error:"Password must be at least 6 characters "})
    }
    const user = await User.findOne({userName});
    if(!user){
        return res.json({error:"User Not Found"})
    }

    res.json({
        user: {
            userName: user.userName,
            _id: user._id
        },
    });
    }
    catch(error){
        console.log(error);
    }
};