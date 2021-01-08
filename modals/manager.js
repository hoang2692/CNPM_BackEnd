let mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const ManagerSchema = new mongoose.Schema({
    firstName:
    {
        type: String,
        required: true,
        trim: true 
    },
    lastName:
    {
        type: String,
        required: true,
        trim: true 
    },
    phone:
    {
        type: String,
        required: true,
    },
    address:
    {
        type: String,
        required: true
    },
    birthday:
    {
        type: Date,
        required: true
    },
    image:
    {
        type: String,
        required: true
    },
    position:
    {
        type: String,
        required: true
    },
    status:
    {
        type: Boolean,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if(!validator.isEmail(value)){
                throw new Error({error: "Invalid Email address"});
            }
        }
    },
    password:
    {
        type: String,
        required: true,
        minlength: 8,
    },
    tokens:
    [{
        token: {
            type: String,
            required: true
        }
    }]
},{ versionKey: false });

ManagerSchema.pre('save', async function (next){
    const manager =  this
    if(manager.isModified("password")){
        manager.password = await bcrypt.hash(manager.password, 8)
    }
    next()
})

ManagerSchema.methods.generateAuthToken = async function(){
    const manager = this
    const token = jwt.sign({_id: manager._id}, process.env.JWT_KEY,{expiresIn: 1440})
    manager.tokens = manager.tokens.concat({token})
    await manager.save()
    return token
}

ManagerSchema.statics.findByCredentials = async (email,password) =>{
    const manager = await Manager.findOne({email})
    if(!manager)
    {
        throw new Error({error:"Invalid login credentials"})
    }
    const isPasswordMatch = await bcrypt.compare(password, manager.password)
    if(!isPasswordMatch)
    {
        throw new Error({error:"Invalid login credentials"})
    }
    return manager
}

const Manager = mongoose.model('Manager',ManagerSchema, 'Managers');

module.exports = Manager;