var config = {
	
	path: "./",
	separator: " - ",
	outputfile: "./output.html"

};

var helper = require("./helper.js");
var myhelper = new helper();

var args = myhelper.initargs();

var freader = require("./filereader.js");
var fwriter = require("./filewriter.js");
var htgen = require("./htmlgen.js");

var myfreader = freader(myhelper.getParam("path", config));

var dirArr = myfreader.readOnlyDir();
var dataArr = new Array();

for(var i=0; i < dirArr.length; i++){
	var dname = dirArr[i];

	if(dname.indexOf(myhelper.getParam("separator", config)) != -1){
		var nameSplit = dname.split(myhelper.getParam("separator", config));
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

myfwriter.createoutputfile(myhelper.getParam("outputfile", config));

process.exit();