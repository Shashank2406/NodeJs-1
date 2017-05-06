var User = require('../models/user');
var Doc = require('../models/doctor');
var Phar = require('../models/Phar');



exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        phone_number: req.body.phone_number,
        created_at: new Date(),
        updated_at: ""
    });

    user.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })
        
    });
};

exports.postDoc = function (req,res){                       //PostDoc function post data to doctor schema
    var doc = new Doc({
        name: req.body.name,
        designation: req.body.designation,
        user_id: req.params.id,
        created_at: new Date(),
        updated_at: ""
    });

    doc.save(function(err,response){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json({
                success: true,
                body:response
            })
        }
    })
}

exports.postPhar = function (req,res){                       //PostPhar function post data to Pharmacist schema
    var phar = new Phar({
        name: req.body.name,
        designation: req.body.designation,
        user_id: req.params.id,
        created_at: new Date(),
        updated_at: ""
    });

    phar.save(function(err,response){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json({
                success: true,
                body:response
            })
        }
    })
}



exports.getUsers=function(req,res){
    User.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}



exports.updateUsers=function(req,res){
    var id = req.params.id;
    User.findOne({_id: id}, function(err, user){
        if(err){
            res.json(err);
        }

        var username = req.body.username;
        user.username = username;
        user.updated_at = new Date();

        user.save(function(err, response){
            if(err){
                res.json(err);
            }

            res.json(response);
        })
    })
}

exports.deleteUsers=function(req,res){
    var id = req.params.id;
    User.findOne({_id: id}, function(err, user){
        if(err){
            res.json(err);
        }

        if(user){
           User.remove({_id: id}, function(err){
                if(err){
                    res.json(err);
                }

                res.json("success");
            })  
       }else{
            res.json("User doesnt exist");
       }
                      
    })
}    

exports.idsearch=function(req,res){
    var id = req.params.id;
    User.findOne({_id:id}, function(err,user){
        if(err){
            res.json(err);
        }
        if(user){
            res.json(user);
        }
        else{
            res.json("User Doesnot exist");
        }
    })
}

exports.regexsearch=function(req,res){
    var reg = req.params.reg;
    regexp = new RegExp(reg);
    User.find({name:regexp}, function(err,user){
        if(err){
            res.json(err);
        }
        if(user){
            res.json(user);
        }
        else{
            res.json("User Doesnot exist");
        }
    })
}



