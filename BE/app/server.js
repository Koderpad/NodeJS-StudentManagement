const express = require('express');
const app = express();
const port = 3000; // default
const router = require('./routers/index.router.js');

app.use(router);

app.listen(port, () => {
	console.log('listening on port http://localhost: ' + port);
});

//setup sequelize
const { sequelize } = require('../app/model/');
sequelize.sync({ alter: true });
