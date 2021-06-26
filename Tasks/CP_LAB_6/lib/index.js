'use strict';
var _namer = require('./namerS');
var _namerS = _interopRequireDefault(_namer);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var person = new _namerS.default();

console.log(person.getFullName());
