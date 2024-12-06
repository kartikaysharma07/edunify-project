const sequelize = require('./sequelize');
const School = require('../models/School');

const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        await sequelize.sync({ alter: true }); // Sync models with the database
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
};

syncDatabase();
