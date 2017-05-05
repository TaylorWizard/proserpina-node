'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//set port variable , which is a access port
app.set('port', process.env.PORT || 3000);
//解析 application/json
app.use(_bodyParser2.default.json());
//解析 application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded());

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("X-Powered", '3.2.1');
  res.header("Content-type", "application/json;charset=utf-8");
  next();
});

app.get('/', function (req, res) {
  console.log('get');
  res.redirect("https://www.baidu.com");
});

app.post('/', function (req, res) {
  console.log('post');
  res.redirect("https://www.baidu.com");
});

app.listen(3000, function (req, res) {
  console.log('app is listening in port 3000');
});