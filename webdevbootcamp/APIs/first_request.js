const request = require("request");
request("https://jsonplaceholder.typicode.com/users/2", function(error, response, body){
    //eval(require("locus"));
    if(!error && response.statusCode == 200) {
        const parsedData = JSON.parse(body);
        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
    } 
});