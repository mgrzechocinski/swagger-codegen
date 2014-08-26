var swagger = require("swagger-node-express");
var url = require("url");
var errors = swagger.errors;
var params = swagger.params;

/* add model includes */

function writeResponse (response, data) {
  response.header('Access-Control-Allow-Origin', "*");
  response.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  response.header("Content-Type", "application/json; charset=utf-8");
  response.send(JSON.stringify(data));
}

exports.models = models = require("../models.js");

exports.home = {
  'spec': {
    "description" : "Operations about pets",
    "path" : "/home",
    "notes" : "Retrieves data for home screen by sending token for a user and receiving HomeScreenResponse json object",
    "summary" : "Retrieves data for home screen",
    "method": "GET",
    "params" : [].concat([]).concat([]).concat([params.body("body", "HomeScreenParams", "Some home screen parameters description", true)
    ]),
    "type" : "HomeScreenResponse",
    "responseMessages" : [errors.invalid('id'), errors.notFound('HomeScreenResponse')],
    "nickname" : "home"
  },
  'action': function (req,res) {
    if (!req.params.body) {
      throw errors.invalid('body');
    }
    writeResponse(res, {message: "how about implementing home as a GET method?"});    
  }
};

