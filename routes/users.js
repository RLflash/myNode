var express = require('express');
var router = express.Router();
var http = require('http');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
	var body=req;
	res.json({error:req.url}) //{"error":{"id":"2323"}}
//  var options = { 
//  	host : '120.24.168.72',    
//  	port : 80,      
//  	path : '',  
//  	method : "GET", 
//  	
//  };
//	var request = http.request(options,function(data){ 
//		data.setEncoding('utf8'),
//		data.on('data',function(chunk){
//			 res.render('users',JSON.parse(chunk));
//			
//			//res.json({error:JSON.parse(chunk)})
//		});  
//		
//	});     
//	
//	request.end();
	
  // res.json({error : "Data Error!1"})
});


module.exports = router;
