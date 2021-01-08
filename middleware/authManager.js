const jwt = require("jsonwebtoken");
const Manager = require("../modals/manager");

const auth = async (req,res,next)=> {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token,process.env.JWT_KEY)
    try
    {
        const manager = await Manager.findOne({_id:data._id,'tokens.token': token})
        if(!manager)
        {
            throw new Error()
        }
        req.manager = manager
        req.token = token
        next()
    }
    catch (error)
    {
        res.status(401).send({error: "Not Authrization to this resource"})
    }
}


module.exports = auth;