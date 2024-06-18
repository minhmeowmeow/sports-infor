const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Guestbook = sequelize.define('Guestbook', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateOfVisit: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    recommend: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 4,
        },
    },
});

module.exports = Guestbook;
