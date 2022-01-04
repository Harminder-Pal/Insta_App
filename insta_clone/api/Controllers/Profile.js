const mongoose = require('mongoose')
const Profile = require('../model/Profile')

exports.getMyFunc =(req, res, next)=> {
        Profile.find()
        .then(result =>{
            console.log(result);
           res.status(200).json({
                profileData:result
           });
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
    };
exports.postMyfun2 =(req, res, next)=> {
        const profile = new Profile({
            userId: new mongoose.Types.ObjectId,
        bio: req.body.bio,
        accountType: req.body.accountType,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        birthday: req.body.birthday, 
        gender: req.body.gender

        })
        profile.save()
        .then(result =>{
            console.log(result);
           res.status(200).json({
                newProfile:result
            })
        })
        
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
}
