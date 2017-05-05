'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _utility = require('utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  var q = req.query.q;
  var md5Value = _utility2.default.md5(q);
  res.send('md5Value: ' + md5Value);
});

app.listen(3000, function (req, resst) {
  console.log('app is listening at port 3000');
});
//# sourceMappingURL=hello.js.map