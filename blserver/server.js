var express = require('express'),
    //path = require('path'),
    //compression = require('compression'),
    bodyParser = require('body-parser'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    wpConfig = require('./webpack.config'),
    api = require('./server/serverApi'),
    app = express();

var compiler = webpack(wpConfig)
app.use(webpackDevMiddleware(compiler, {noInfo:true, publicPath: wpConfig.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.set('port', process.env.PORT || 5000);
app.disable('etag');

//app.use(compression());

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/static'));

app.get('/api/batches', api.getBatches);
app.post('/api/batches', api.createBatch);
//app.get('/products/:id', products.findById);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});