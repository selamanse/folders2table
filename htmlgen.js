// htmlgen module

module.exports = function(data) {
	
	var cols = 0;
	var rows = data.length;
	
	//check col length
	for(var i=0; i<data.length; i++){
		var subdata = data[i];
		if(cols < subdata.length){
			cols = subdata.length;	
		}
	}
		

  return {
  	"cols": cols,
  	"rows": rows,
    exporthtml: function() {
    	
    	var htmlout = '<table align="center" cellspacing="2" height="100%" width="100%">\r\n';
    	htmlout += "<thead>\r\n";
    	
    	for(var i=0; i < this.cols; i++){
    		htmlout += "\t<td class='col" + (i+1) + "'>Column" + (i+1) + "</td>\r\n";
    	}
    	
    	htmlout += "</thead>\r\n";
    	
    	for(var i=0; i < this.rows; i++){
    		
    		var dat = data[i];
    		htmlout +="<tr class='row"+ (i+1)+"'>\r\n";
    		
    		for(var j=0; j < this.cols; j++){
    			
    			htmlout +="\t<td class='col"+ (j+1) +"'>";
    			
    			if(typeof dat[j] != "undefined"){
    				htmlout += dat[j];
    			}
    			
    			htmlout +="</td>\r\n";
    		}
    		htmlout += "</tr>\r\n"
    		
    	}
    	
    	htmlout += "</table>";
    	
    	return htmlout;
    	
    }
  };
}



