import validator from "validator";
import userModel from "../models/userModel";


//Route for user Login
const loginUser = async (req, res)=>{


}

// Route for user register
const registerUser = async (req, res)=>{
    try {
        const { name, email, password } = req.body;

        //checking user already exists or not
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success:false, message:"user already exists"})
        }

        //validating email format & strong password
        if(validator.isEmail(email)){
            return res.json({success:false, message:"please enter a valid email"})
        }
        if(password.length < 8){
            return res.json({success:false, message:"please enter a strong password"})
        }

    } catch (error) {
        
    }

}

// Route for admin login
const adminLogin = async(req, res)=>{


}

export { loginUser, registerUser,adminLogin }