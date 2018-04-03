'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _middlewares = require('./conf/middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _routes = require('./modules/routes');

var _routes2 = _interopRequireDefault(_routes);

var _expressHistoryApiFallback = require('express-history-api-fallback');

var _expressHistoryApiFallback2 = _interopRequireDefault(_expressHistoryApiFallback);

require('./conf/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = _config2.default.get('app.PORT');
var app = (0, _express2.default)();

var publicDir = __dirname + './../../public';

app.use(_express2.default.static(publicDir));

// const staticServe = express.static('../..');

// app.use("/", staticServe);
// app.use("*", staticServe);

//All basic configuration done in middleware
(0, _middlewares2.default)(app);
//import userRoutes from './modules/User/user.routes'
//app.use('/api/user', userRoutes)
(0, _routes2.default)(app);

app.use((0, _expressHistoryApiFallback2.default)('index.html', { root: publicDir }));

app.listen(port, function (err) {
    if (err) throw err;
    console.log('Application Running on ' + port);
});