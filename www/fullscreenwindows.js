var exec = require('cordova/exec');

exports.resize = function (args, success, error) {
	exec(success, error, 'screenResize', 'uwp', [args]);
}; 