const execa = require('execa');
const co = require('co');

co(function *() {
	yield execa('xcodebuild', null, {cwd: 'whereami'});
	yield execa('mkdir', ['-p', 'bin']);
	yield execa('mv', ['whereami/build/Release/whereami', 'bin/whereami']);
	yield execa('rm', ['-rf', 'whereami/build']);
})
.catch(err => {
	console.log(err);
});
