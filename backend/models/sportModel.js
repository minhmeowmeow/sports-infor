const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Sport = sequelize.define('Sport', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    players: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    strategy: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    isTeamGame: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    rules: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    facts: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    statistics: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    countries: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
});

module.exports = Sport;
