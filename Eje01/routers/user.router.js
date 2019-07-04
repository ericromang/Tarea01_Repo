const router = require('express').Router();

module.exports = (wagner) => {
    
    const userCtrl = wagner.invoke((User) => 
        require('../controllers/user.controller')(User));
    
    router.get('/:name/:password',(req,res)=>
        userCtrl.loginUser(req,res));

    router.post('/', (req, res) =>
        userCtrl.createUser(req, res));

    router.get('/',(req,res)=>
        userCtrl.findAll(req,res));
    
    router.get('/:id',(req,res)=>
        userCtrl.findUser(req,res));

    router.delete('/:id',(req,res)=>
        userCtrl.deleteById(req,res));

    router.put('/:id',(req,res)=>
        userCtrl.findUserAndUpdate(req,res));
    return router;
}