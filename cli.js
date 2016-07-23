#!/usr/bin/env node
'use strict';
var meow = require('meow');
var leftPad = require('left-pad');
var stripIndent = require('strip-indent');
var ora = require('ora');
var chalk = require('chalk');
var latitude = require('./');

meow([
	'Usage',
	'  $ latitude ',
	'',
	'Options',
	'  --help  Prints this text.',
	'',
	'Examples',
	'  $ latitude'
]);

const spinner = ora('Loading location...').start();

latitude()
.then(location => {
	const output = stripIndent(`
		${renderStat('↔️', 'Latitude', location.latitude, '°')}
		${renderStat('↕️', 'Longitude', location.longitude, '°')}
		${renderStat('⏺', 'Accuracy', location.accuracy, 'meters')}
		${renderStat('📶', 'Altitude', location.altitude, 'meters')}`);
	spinner.stop();
	console.log(output);
})
.catch(err => {
	spinner.stop();
	console.error(chalk.red(err));
});

function renderStat(emoji, name, value, unit) {
	const precision = unit == 'meters' ? 10 : 1000000000
	const shortened = Math.round(value * precision) / precision;
	return `${emoji}  ${chalk.blue(name)} ${leftPad(shortened, 28 - name.length)} ${chalk.gray(unit)}`;
}
