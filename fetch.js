const express = require('express'),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	file = `${__dirname}/comments.json`,
	app = new express();

var json = null;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

app.get('/', (req, res) => {
	json = JSON.parse(fs.readFileSync(file));
	res.json(json);
});

app.post('/', (req, res) => {
	const comment = { 
		content: req.body.value 
	};
	json.comment.push(comment);
	fs.writeFile(
		file, 
		JSON.stringify(json, null, 2), 
		(err) => {
			if (err) throw err;
			res.json(json);
		}
	);
});

app.listen(2016, () => console.log('server is on...'));