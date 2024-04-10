import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res,next) => {

    // console.log(req.body);
    const { username,email, password}  = req.body;
    // check if any fiels are empty or not
    if(!username || !email || !password){
        return next(errorHandler(400,'Please provide all fields'));
    }
    const hashedPassword= bcryptjs.hashSync(password, 10);
    const newUser = new User({ username,email,password:hashedPassword});
    try{
    await newUser.save()

    res.status(201).json({
        success: true,
        message: "User created successfully",
    });
    // user: newUser 
        } catch (err){
           next(err);
        //    next(errorHandler(550,'error from the function'));
        }
};


export const signin = async (req, res,next) => {
    const { email, password}  = req.body;
   try {
    const validUser = await User.findOne({email});
    if(!validUser) return next(errorHandler(400,'User Not Found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword) return next(errorHandler(400,'Wrong Credetial'));

    const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET);     // , {expiresIn: '1h'} add after jwt secred if you wan to use
    
    const { password : pass ,...rest} = validUser._doc;
    res.cookie('access_token', token, {
        httpOnly: true,
        expiresIn : new Date(Date.now() + 1000 * 60 * 60),  // 1 hour, // 24 hours ->(1000  * 60 * 60 * 24)  , 2 hours ->(1000  * 60 * 60 * 2)
    }).status(200).json(rest);
    
   } catch (error) {
    
   }
};