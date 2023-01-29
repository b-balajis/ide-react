import React from 'react'

const ServerNode = () => {
    var request = require('request');

var program = {
    script : "",
    language: "php",
    versionIndex: "0",
    clientId: "bc681666a8ee6c0e09c5425b69d2e0a3",
    clientSecret:"165b83ebeb1a90db0ea1e2e9ba1b900e65bba142447bc059438f130c4af36966"
};
request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
})
  return (
    <div>
      Hello
    </div>
  )
}

export default ServerNode
