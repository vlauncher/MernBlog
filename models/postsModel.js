const { DataTypes } = require('sequelize');
const database = require('../config/db');
const User = require('./usersModel');

const Posts = database.define('Posts',{
    topic : {
        type : DataTypes.STRING,
        allowNull : false
    },
    message : {
        type : DataTypes.STRING,
        allowNull : false
    },
},{ tableName : 'posts' });

User.hasMany(Posts,{foreignKey:'owner'});
Posts.belongsTo(User);

module.exports = Posts;