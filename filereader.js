// filereader module
var plib = require('path');

module.exports = function(path) {
  return {
    readOnlyDir: function() {
      var fs = require('fs');
        
        
        if(typeof path == "undefined"){
        	path = ".";
        }

         
		var files = fs.readdirSync(path);
		var dirArr = new Array();

		for(var i=0; i < files.length; i++){
	
			var fname = files[i];
			var fstat = fs.statSync(path + plib.sep + fname);

			if(fstat.isDirectory() === true){
				console.log(fname);
				dirArr.push(fname);
			}

		}

		console.log("=======================");
		console.log("total: " + dirArr.length + " directories");	

		return dirArr;
    }
  };
}



