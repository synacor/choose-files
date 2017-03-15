# `choose-files`

[![Greenkeeper badge](https://badges.greenkeeper.io/synacor/choose-files.svg)](https://greenkeeper.io/)

[![NPM](http://img.shields.io/npm/v/choose-files.svg)](https://www.npmjs.com/package/choose-files)
[![travis-ci](https://travis-ci.org/synacor/choose-files.svg)](https://travis-ci.org/synacor/choose-files)

Prompt the user to select files, then pass the [File] objects to a callback.
If the user cancels file selection, an empty Array is returned.

Works in modern browsers, Cordova, Electron, etc.


---


### Usage

```js
import chooseFiles from 'choose-files';

chooseFiles( files => {
	// `files` is an Array of File objects

	// Example - print filenames:
	let names = files.map( file => file.name);
	console.log(names);
});
```


---


### License

BSD 3-Clause


[File]: https://developer.mozilla.org/en-US/docs/Web/API/File
