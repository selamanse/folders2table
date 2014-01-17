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
    	console.log("columns: " + this.cols);
   	 	console.log("rows: " + this.rows);
   	 	return "output....";
    }
  };
}



