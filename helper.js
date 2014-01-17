// helper module

module.exports = function() {
	
  return {
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



