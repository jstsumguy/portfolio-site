var express = require('express')
var parser = require('body-parser')

var app = express();
app.use(parser.json());
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/templates", express.static(__dirname + '/templates'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/layouts/index.html');
})
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});