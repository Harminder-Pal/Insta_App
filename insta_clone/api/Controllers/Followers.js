const mongoose = require('mongoose')
const Followers = require('../model/Followers')

exports.getMyFunc =(req, res, next)=> {
        Followers.find()
        .then(result =>{
            console.log(result);
           res.status(200).json({
                FollowersData:result
           });
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
    };
exports.postFollowerFunc =(req, res, next)=> {
        const followers = new Followers({
            userId: req.body.userId,
        followerId: req.body.followerId

        })
        followers.save()
        .then(result =>{
            console.log(result);
           res.status(200).json({
                newFollowers:result
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
}
