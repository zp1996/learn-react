const webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server'),
	config = require('./webpack.config'),
	port = process.env.PORT;

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
  	hot: true,
  	historyApiFallback: true
}).listen(3000, 'localhost', (err, res) => {
	if (err) console.log(err);
	console.log('server is on port 3000');
});