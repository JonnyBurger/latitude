'use strict';

const fs = require('fs');
const execa = require('execa');
const co = require('co');

module.exports = function () {
	return new Promise(function (resolve, reject) {
		co(function *() {
			var bin;
			try {
				if (fs.statSync('bin/whereami')) {
					bin = 'bin/whereami';
				}
			} catch (e) {
				bin = 'whereami';
			}
			let data = yield execa(bin);
			if (data.stderr.length) {
				throw new Error(data.stderr);
			}
			const result = JSON.parse(data.stdout);
			if (result.success) {
				resolve(result.location);
			} else {
				reject(result.error);
			}
		})
		.catch(err => {
			try {
				reject(JSON.parse(err.stdout).error);
			} catch (e) {
				reject(e);
			}
		});
	});
};
