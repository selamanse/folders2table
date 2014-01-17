var config = {
	
	path: "./",
	separator: " - ",
	outputfile: "./output.html"

};


var helper = require("./helper.js");
var myhelper = new helper();

var freader = require("./filereader.js");
var fwriter = require("./filewriter.js");
var htgen = require("./htmlgen.js");

var myfreader = freader(config.path);

var dirArr = myfreader.readOnlyDir();
var dataArr = new Array();

for(var i=0; i < dirArr.length; i++){
	var dname = dirArr[i];

	if(dname.indexOf(config.separator) != -1){
		var nameSplit = dname.split(config.separator);
		nameSplit[1] = myhelper.convert2date(nameSplit[1]);
		
		
		dataArr.push(myhelper.reorderArr(nameSplit));
	}
}

if(dataArr.length == 0){
	console.log("no match found.");
	console.log("exiting with failure...");
	process.exit(1);
}


var myhtgen = htgen(dataArr);

var htmlstring = myhtgen.exporthtml();

var myfwriter = fwriter(htmlstring);

myfwriter.createoutputfile(config.outputfile);

process.exit();