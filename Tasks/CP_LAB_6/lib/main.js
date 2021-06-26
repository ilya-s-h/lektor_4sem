'use strict';
var _moment = require('moment');
var _momentS = _interopRequireDefault(_moment);
var _name = require('./name');
var _nameS = _interopRequireDefault(_name);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
console.log(_nameS.default);
console.log(_momentS.default.unix('1500514362').format('DD.MM.YYYY HH:mm:ss'));
