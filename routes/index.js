var express = require('express');
var dynamodbCreate = require('../src/models/createDynamoDB');

var router = express.Router();

/** 
 *  This route will respond to homePage
 *  @route GET /
 *  @group index - default route to home
 *  @returns 200 - success
 *  @returns 404 - not found
 *  @returns 401 - Unauthorized
 *  @returns 403 - Forbidden
 *  @returns {Error} default - Unexpected error
 *  @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 *  @produces application/json
 *  @consumes application/json
 */
router.get('/', function(req, res , next){
    dynamodbCreate().then( data => {
        console.log(data, "successful hit");
        res.send("home page");
    })
});

module.exports = router;