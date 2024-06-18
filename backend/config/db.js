const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sportinfo', 'postgres', '18112003minh', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

sequelize.authenticate()
    .then(() => console.log('Kết nối cơ sở dữ liệu thành công...'))
    .catch(err => console.log('Kết nối cơ sở dữ liệu thất bại: ', err));

module.exports = sequelize;
