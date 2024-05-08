const express = require('express');
const app = express();

app.get('/user', (req, res) => {
	res.send({"id":001, "name":"Piseth"});
});

app.listen(5000, () => {
	console.log("Express Server is Running at Port 5000");
});