//https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
var og = require('open-graph-scraper');
var express = require("express");
var app = exports.app = express();

var port = process.env.PORT || 5000;

app.set('json spaces', 40);
app.get("/", function(req, res){
    var url = {url:"http://www.hotelurbano.com/pacote/pacote-punta-cana/76544"};

    og(url, function(err, meta){
        res.json(meta);
    })
});

app.listen(port);
