/// <reference path="../../typings/node/node.d.ts"/>
var path = require('path');
var fs = require("fs");
var FileReader = (function () {
    function FileReader() {
    }
    // export class Utils {
    FileReader.readDataFile = function (filename) {
        var base = path.resolve('.');
        var filepath = path.join(base, "data/", filename);
        try {
            var buf = fs.readFileSync(filepath, "utf8");
            var data = JSON.parse(buf);
            return data;
        }
        catch (err) {
            console.error("filepath", filepath);
            throw (err);
        }
    };
    return FileReader;
})();
module.exports = FileReader;
//# sourceMappingURL=FileReader.js.map