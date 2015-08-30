/// <reference path="../../typings/node/node.d.ts"/>

var path = require('path');
var fs = require("fs");

class FileReader {

	// export class Utils {
	static readDataFile(filename: string): any {
		var base = path.resolve('.');
		var filepath = path.join(base, "data/", filename);

		try {
			var buf = fs.readFileSync(filepath, "utf8");
			var data = JSON.parse(buf);
			return data;
		} catch (err) {
			console.error("filepath", filepath);
			throw (err);
		}
	}

}

export = FileReader;
