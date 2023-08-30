const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config/database')
const Text = sequelize.define("text", {
   text: {
     type: DataTypes.STRING,
     allowNull: false
   },
});

sequelize.sync().then(() => {
   console.log('Book table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});
module.exports = Text;