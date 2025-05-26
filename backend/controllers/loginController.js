const loginModel = require("../models/loginModel")
const mongoose = require("mongoose")

// get all users 
const getUsers = async(req,res) => {
  const users = await loginModel.find({}).sort({createdAt: -1})

  res.status(200).json(users)
}



// create a new user
    const createUser = async(req, res) => {
        const { username, password, is_active = 1 } = req.body;
    try {
        const user = await loginModel.create({ username, password, is_active });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    }

// delete a user 
const deleteUser = async(req,res) => {
  
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)){

    return res.status(404).json({error : "Not a Valid Id"})
  }

  const user = await loginModel.findOneAndDelete({_id: id})

  if (!user){
    return res.status(404).json({error: "Couldnt delete"})
  }

  res.status(200).json({user})


}

// update a workout 
const updateUser = async(req,res) =>{

  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)){

    return res.status(404).json({error : "Not a Valid Id"})
  }

  const user = await loginModel.findOneAndUpdate({_id : id},{
    ...req.body
  })

  if (!user){
    return res.status(404).json({error: "Couldnt delete"})
  }

  res.status(200).json({user})


}

//authUser
const authUser = async(req,res) => {

  const { username, password } = req.body;
  const user = await loginModel.findOne({ username });

  if (!user) {

    return res.status(401).json({message: "User Not Found",status:false});
  } else {

    if (user.password === password) {

      return res.status(200).json({status:true,message:"User and Password Correct"})
    }
  }

}

module.exports = {
    createUser,
    getUsers,
    deleteUser,
    updateUser,
    authUser
}