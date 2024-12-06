const { DataTypes } = require('sequelize'); // Import Sequelize DataTypes
const sequelize = require('../db/sequelize'); // Import the Sequelize instance

// Define the "School" model
const School = sequelize.define('School', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false, // This field is required
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    city: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    state: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    contact: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false, // URL or path to the image
    },
    email_id: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isEmail: true, // Ensures the value is a valid email
        },
    },
});

// Export the model
module.exports = School;

