# latitude [![Build Status](https://travis-ci.org/JonnyBurger/latitude.svg?branch=master)](https://travis-ci.org/JonnyBurger/latitude)

> Get location info using CoreLocation (macOS)

![GIF](https://thumbs.gfycat.com/ClearLimitedIberianmole-size_restricted.gif)

## Install

```
$ npm install -g latitude
```

to use it as a CLI tool.

```
$ npm install --save latitude
```

to use it in your project

## Usage

```js
const latitude = require('latitude');

latitude()
.then(location => {
	/*
		{latitude: 47.06367550072804,
		longitude: 8.28075766132394,
		accuracy: 65,
		altitude: 447.5973815917969}
	*/
})
.catch(err => {
	// error description
});
```


## API

### latitude()

## CLI

```
$ npm install --global latitude
```

```
$ latitude
```

## whereami

This project uses a modified version of [https://github.com/robmathers/WhereAmI](WhereAmI) by Rob Mathers.
The source code is in the `/whereami` directory. To build the code and put the executable into `bin/whereami`, run `npm run build`. You need to have Xcode installed.

## License

MIT © [Jonny Burger](http://jonny.io)
