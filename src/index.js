/** Prompt the user to select files.
 *
 *  @example
 *	  chooseFiles( files => {
 *		  // example: print the file names
 *		  console.log(files.map( file => file.name));
 *	  });
 */
export default function chooseFiles(opts, callback) {
	if (typeof opts==='function') {
		[opts, callback] = [callback, opts];
	}

	let input = document.createElement('input');
	input.style.cssText = 'position:absolute;left:0;top:-999em;';
	input.type = 'file';
	input.multiple = true;

	if (opts) {
		for (let i in opts) if (opts.hasOwnProperty(i)) {
			input[i] = opts[i];
		}
	}

	document.body.appendChild(input);

	let done = () => {
		if (!callback) return;
		callback([].slice.call(input.files || []));
		document.body.removeChild(input);
		callback = input = null;
	};

	input.addEventListener('change', done);
	addEventListener('focus', () => setTimeout(done, 100) );

	input.click();
}
