const asyncHandler = require('express-async-handler');
const Posts = require('../models/postsModel');

const getPosts = asyncHandler( async (req,res) => {
    const posts = await Posts.findAll({where:{owner:req.user.id}})
    if (posts.length > 0 ) {
    res.status(200).send({posts});
    } else {
        res.status(400).send({msg:"No Posts Found"});
    }
});

const createPosts = asyncHandler( async (req,res) => {
    const { topic , message } = req.body;
    const user = req.user.id;
    try {
        if(!topic){
            res.status(400).send({msg:"topic cant be empty"})
            return
        }
        if(!message){
            res.status(400).send({msg:"message cant be empty"})
            return
        }
        const post = await Posts.create({
            topic,message,owner:user
        })
        if(post){
            res.status(201).send({msg:"Post Created",post})
        }
    } catch (error) {
        
    }
});

const updatePosts = asyncHandler( async (req,res) => {
    const postid = req.params.id;;
    const data = req.body;
    try {
        const post = await Posts.update(data,{where:{id:postid}})
        res.status(200).send({msg: "Post Updated"});
    } catch (error) {
        throw error
    }
});

const deletePosts = asyncHandler( async (req,res) => {
    const postid = req.params.id;
    const post = await Posts.findOne({where:{id:postid}})
    if(post){
        post.destroy()
        res.status(200).send({msg:"Post deleted"});
    } else {
        res.status(400).send({msg : `No post with ID : ${postid} Found`});
    }
});

module.exports = {
    getPosts,
    createPosts,
    updatePosts,
    deletePosts
};
