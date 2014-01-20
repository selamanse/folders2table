// helper module

module.exports = function() {
		
  return {
	args: new Array(),
	getParam: function(paramName, defaults){
		
		if(typeof this.args[paramName] != "undefined"){
			return this.args[paramName];
		}else if(typeof defaults != "undefined" && typeof defaults[paramName] != "undefined"){
			return defaults[paramName];
		}else{
			return false;
		}
		
	},
	initargs: function(){
		
		var argv = process.argv;
		
		for(i=2; i<argv.length; i++){
			
			var j = i + 1;
			
			if(typeof argv[j] != "undefined"){
				this.args[argv[i]] = argv[j];
				i++;
			}else{
				this.args[argv[i]] = true;
			}
			
		}
		
		return this.args;
		
	},
  	reorderArr: function(datArr){
  	
  		var outArr = new Array();
  		
  		outArr[0] = datArr[0];
  		outArr[1] = datArr[2];
  		outArr[2] = datArr[1];
  		
  		return outArr;
  		
  	},
   	convert2date: function(dateStr) {
    	 
    	 var datArr = dateStr.split(".");
    	 
    	 return datArr[2] + "." + datArr[1] +  "." + datArr[0];
    	     	 
    }
  };
}



