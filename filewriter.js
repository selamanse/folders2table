// filewriter module

module.exports = function(data) {
	
  return {
    createoutputfile: function(path) {
    	 var fs = require('fs');
    	 
    	 var fileop = fs.writeFileSync(path, data);
    	 
    	 return fileop;
    	     	 
    }
  };
}



