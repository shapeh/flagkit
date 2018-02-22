const sass = require('node-sass'),
	path = require('path'),
	fs = require('fs'),
	pathToFlagStyles = path.join(__dirname, '../styles/')

sass.render({
	file: path.join(pathToFlagStyles, 'flags.scss')
}, function (err, result) {
	if(!err){
		// No errors during the compilation, write this result on the disk
		fs.writeFile(path.join(pathToFlagStyles, 'flags.css'), result.css, function(err){
			if(!err){
				console.log('File written to: ', pathToFlagStyles)
			} else {
				console.error(err)
			}
		});
	} else {
		console.error(err)
	}
})
