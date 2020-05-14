const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/API')(app);

app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log(`Ryan's iTunes API server is running on port ${port}`);
})