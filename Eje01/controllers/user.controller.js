const http = require('http');
const path = require('path');

let _user;

const createUser = (req, res) => {
    const user = req.body;

    _user.create(user)
        .then((data)=> {
            res.status(200);
            res.json({msg:"Usuario creado correctamente", data: data});
        })
        .catch((err)=> {
            res.status(400);
            res.json({msg:"Error!!!!", data:err});
        })
}

const findAll = (req , res) => {
    _user.find()
    .then((data) => {
        res.status(200);
        if(data.length == 0){
            res.status(204);
            res.json({msg:"No se encontraron usuarios"});
        }else{
            res.status(200);
            res.json({msg:"Éxito!!",data:data});
        }
    })
    .catch((err)=>{
        res.status(400);
        res.json({msg:"Error!"});
    })
}

const findUser = (req , res) => {
    const {id} = req.params;
    const params ={
        _id:id
    }
    _user.findOne(params)
    .then((data) => {
        res.status(200);
        if(data.length == 0){
            res.status(204);
            res.json({msg:"No se encontro el usuario"});
        }else{
            res.status(200);
            res.json({msg:"Éxito!!",data:data});
        }
    })
    .catch((err)=>{
        res.status(400);
        res.json({msg:"Error!"});
    })
}

const findUserAndUpdate = (req , res) => {
    const {id} = req.params;
    const user = req.body;
    const params ={
        _id:id
    }
    _user.findOneAndUpdate(params,user)
    .then((data) => {
        res.status(200);
        if(data.length == 0){
            res.status(204);
            res.json({msg:"No se encontraron Usuarios"});
        }else{
            res.status(200);
            res.json({msg:"Éxito!!",data:data});
        }
    })
    .catch((err)=>{
        res.status(400);
        res.json({msg:"Error!"});
    })
}

const deleteById = (req,res) =>{
    const {id} = req.params;
    const params ={
        _id:id
    }
    _user.findByIdAndRemove(params)
    .then((data) => {
        res.status(200);
        res.json({msg:"Éxito eliminado!!",data:data});
    })
    .catch((err)=>{
        res.status(400);
        res.json({msg:"Error! no se encontro el usuario",err: err});
    })
}

const loginUser = (req , res) => {
    const {name,password} = req.params;
    const params ={
        name:name,
        password:password
    }
    _user.findOne(params)
    .then((data) => {
        res.status(200);
        if(data.length == 0){
            res.status(204);
            res.json({msg:"No se encontraron Usuarios"});
        }else{
            res.status(200);
            res.json({msg:"Éxito!!",data:data});
        }
    })
    .catch((err)=>{
        res.status(400);
        res.json({msg:"Error!"});
    })
}

module.exports = (User) => {
    _user = User;
    return({
        createUser,
        findAll,
        findUser,
        deleteById,
        findUserAndUpdate,
        loginUser
    });
}
