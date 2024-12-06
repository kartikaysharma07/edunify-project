const { DataTypes } = require('sequelize');
const sequelize = require('../src/app/db/sequelize');

const School = sequelize.define('School', {
    name: { type: DataTypes.TEXT, allowNull: false },
    address: { type: DataTypes.TEXT, allowNull: false },
    city: { type: DataTypes.TEXT, allowNull: false },
    state: { type: DataTypes.TEXT, allowNull: false },
    contact: { type: DataTypes.BIGINT, allowNull: false },
    image: { type: DataTypes.TEXT, allowNull: false },
    email_id: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = School;

