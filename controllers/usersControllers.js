const asyncHandler = require('express-async-handler');
const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const register = asyncHandler( async (req,res) => {
    const{ first_name,last_name,email,password } = req.body;
    try {
        // validate fields
        if (!first_name || !last_name || !email || !password) {
            res.status(400).send({msg:"all fields must be entered"})
            return
        }
        // Chec if user exists
        const userExists = await User.findOne({where:{email:email}})
        if(userExists){
            res.status(400).send({msg:"email already registered"})
            return
        }
        // Register new User
        const user = await User.create({
            first_name,
            last_name,
            email,
            password
        })
        if(user){
            res.status(201).send({
                first_name:first_name,
                last_name:last_name,
                email:email,
                token:generateToken(user.id),
                msg: "Registeration Successfull"
            })
        }
    } catch (error) {
        throw error;
    }
});

const login = asyncHandler( async (req,res) => {
    const{email,password} = req.body;
    try {
        // Validate fields
        if(!email || !password ) {
            res.status(400).send({msg:"fields cant be empty"});
            return
        }
        // Check for user
        const user = await User.findOne({where:{email:email}})
        if(user && (await bcrypt.compare(password,user.password))){
            res.status(200).send({
                first_name : user.first_name,
                last_name : user.last_name,
                email : user.email,
                token: generateToken(user.id)
            })
        } else {
            res.status(400).send({msg:"Email or Password not registered"})
        }

    } catch (error) {
        throw error
    }
});

const logout = asyncHandler( async (req,res) => {
    res.status(200).send({msg:'Logout'});
});

const getusers = asyncHandler( async (req,res) => {
    res.send('hhh')
});

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'12h'})
}

module.exports = {
    register,
    login,
    logout,
    getusers
};