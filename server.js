var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

//Hello get call
app.get('/',function(request,response){
  console.log("Got a GET request for the homepage");
  response.send("HELLO GET");
});

//Post request
app.post('/',function(request,response){
  console.log("POST RESPONSE FOR HOMEPAGE");
  response.send("HELLO POST");
});

app.post('/userlogin_post',urlencodedParser,function(request,result){
    //Prepare output in JSON format
    response = {
      email:request.body.email,
      password:request.body.password
    };
    console.log(response);
    result.end(JSON.stringify(response));
});

var server = app.listen(8084,function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example listening at %s %s",host,port);
})
