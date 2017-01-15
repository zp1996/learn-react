const fs = require('fs'),
	exec = require('child_process').exec,
	argv = require('optimist').argv,
	config = require('./config.json')
	name = argv.name;

if (config.components.indexOf(name) !== -1) {
	throw new Error('have this component');
}

const upperName = CamelTo(name),
	src = `./src/${name}`,
	demo = `./demo/${name}`,
	tpl = {
		html: function() {
			return (
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>${name}</title>
        <link rel="stylesheet" type="text/css" href="/build/css/${name}.style.css" />
    </head>
    <body>
        <div id="${upperName}-demo-card"></div>
        <script type="text/javascript" src="/build/js/${name}.js"></script>
    </body>
</html>`);
		},
		src_js: function() {
			return (
`import React, { Component, PropTypes } from 'react';
import styles from './${name}.scss';

class ${name} extends Component {

}

export default ${name};`);	
		},
		demo_js: function() {
			return (
`import React from 'react';
import ReactDom from 'react-dom';
import ${name} from '../../src/${name}/${name}';

ReactDom.render(
	, document.getElementById('${upperName}-demo-card')
)`);
		}
	}

function CamelTo(name) {
	return name.replace(/(\w)([A-Z])/g, '$1-$2')
		.replace(/(\w)([A-Z])/g, '$1-$2')
		.toLowerCase();
}
exec(`mkdir src/${name}`, function() {
	fs.writeFile(
		`./src/${name}/${name}.scss`, 
		'@charset "utf-8";'
	);
	fs.writeFile(
		`./src/${name}/${name}.jsx`,
		tpl.src_js()
	);
});
exec(`mkdir ${demo}`, function() {
	fs.writeFile(
		`${demo}/index.html`, 
		tpl.html()
	);
	fs.writeFile(
		`${demo}/${name}app.js`,
		tpl.demo_js()
	);
});

config.components.push(name);
// 修改json文件
fs.writeFile('./config.json', JSON.stringify(config, null, 4));