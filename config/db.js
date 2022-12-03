const { Sequelize } = require('sequelize');

const database = new Sequelize({
    dialect : 'sqlite',
    storage : 'db.sqlite3'
});

// const database = new Sequelize('postgres://yaydtkgi:l7SSFDNU7zxkoDGyN5l03dKseWB_d-Az@peanut.db.elephantsql.com/yaydtkgi')

database.sync();


module.exports = database;