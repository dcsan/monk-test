var FileReader = require("./utils/FileReader");
var raw = FileReader.readDataFile("../data/testdata.json");
console.log("read raw data", raw.length);
var db = require('monk')('localhost/monk-test');
var coll = db.get("test-collection");
coll.remove({}); // careful this is async too!
var p1, p2;
p1 = coll.insert(raw[0]);
console.log("p1.type", p1.type);
p1.on("success", function (doc) {
    console.log(">> insert.success", doc);
    var finder = { category: "test" };
    var p2 = coll.find(finder);
    console.log("p2.type", p2.type);
    p2.on("find.success", function (c) {
        this.log("found", c);
        db.close();
    });
    db.close();
});
p1.on("complete", function (doc) {
    console.log("complete", doc);
});
p1.on("error", function (doc) {
    console.log("success", doc);
});
console.log(p2);
// db.close();
//# sourceMappingURL=app.js.map