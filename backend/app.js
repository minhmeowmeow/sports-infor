const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const sportRoutes = require('./routes/sportRoutes');
const guestbookRoutes = require('./routes/guestbookRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api', sportRoutes);
app.use('/api', guestbookRoutes);

sequelize.sync()
    .then(() => console.log('Kết nối cơ sở dữ liệu thành công...'))
    .catch(err => console.log('Kết nối cơ sở dữ liệu thất bại: ', err));

module.exports = app;
