const execa = require('execa');
const co = require('co');

co(function *() {
	yield execa('xcodebuild', null, {cwd: 'whereami'});
	yield execa('mv', ['whereami/build/Release/whereami', 'fetcher']);
	yield execa('rm', ['-rf', 'whereami/build']);
})
.catch(err => {
	console.log(err);
});
