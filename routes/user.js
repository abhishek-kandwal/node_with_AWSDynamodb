var express = require('express');
var dynamodb = require('../src/models/CRUD');

var router = express.Router();

/** 
 *  This route will respond to user
 *  @route GET /user/
 *  @group user - get the movies list
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
    console.log("inside user")
    dynamodb.Read().then( data => {
        res.send( data);
    })
});

/** 
 *  This route will respond to user id
 *  @route GET /user/{id}
 *  @group user - Retrieves a specific user by id
 *  @param  {integer} id.path.required
 *  @returns 200 - success
 *  @returns 404 - not found
 *  @returns 401 - Unauthorized
 *  @returns 403 - Forbidden
 *  @returns {Error} default - Unexpected error
 *  @headers  200.X-Rate-Limit - calls per hour allowed by the user
 *  @produces application/json
 *  @consumes application/json
 */
router.get('/:id', function(req, res , next){
    console.log(req.params.id);
    res.send("here in the user/id");
});


/**
 * JSON parameters require a model. This one just has "name"
 * @typedef ReqNameJSON
 * @property {integer} id.required - name of person making request - eg: Test
 * @property {string}  name.required
 * @property {string}  class 
 * @property {string}   hobby
 */

/** 
 *  This route will respond to user
 *  @route POST /user/
 *  @group user - post new movies
 *  @param {ReqNameJSON.model} name.body.required
 *  @returns 200 - success
 *  @returns 201 - Created
 *  @returns 404 - not found
 *  @returns 401 - Unauthorized
 *  @returns 403 - Forbidden
 *  @returns {Error} default - Unexpected error
 *  @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 *  @produces application/json
 *  @consumes application/json
 */
router.post('/', function(req,res, next){
    dynamodb.Insert(req.body).then(data => {
        console.log( data , "data Inserted")
        res.json({
            status: 200,
            body : data,
            api: "user"
        })
    })
});

/**
 * JSON parameters require a model. This one just has "name"
 * @typedef reqUserModel
 * @property {integer} id.required - name of person making request - eg: Test
 * @property {string}  name.required
 * @property {string}  hobby
 */

/** 
 *  This route will respond to movies
 *  @route PUT /user/
 *  @group user - update movies
 *  @param {reqUserModel.model} reqUserModel.body.required
 *  @returns 200 - success
 *  @returns 201 - Created
 *  @returns 404 - not found
 *  @returns 401 - Unauthorized
 *  @returns 403 - Forbidden
 *  @returns {Error} default - Unexpected error
 *  @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 *  @produces application/json
 *  @consumes application/json
 */
router.put('/', function(req,res, next){
    console.log(req.body , "updated data")
    dynamodb.Update(req.body).then( data => {
        res.json({
            status: 201,
            body : data,
            api: "user put"
        })
    })
});

/**
 * JSON parameters require a model. This one just has "name"
 * @typedef ReqDeleteModel
 * @property {integer} id.required - name of person making request - eg: Test
 * @property {string}  name.required
 */

/** 
 *  This route will respond to movies
 *  @route Delete /user/
 *  @group user - delete uesr
 *  @param {ReqDeleteModel.model} reqUserModel.body.required
 *  @returns 200 - success
 *  @returns 201 - Created
 *  @returns 404 - not found
 *  @returns 401 - Unauthorized
 *  @returns 403 - Forbidden
 *  @returns {Error} default - Unexpected error
 *  @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 *  @produces application/json
 *  @consumes application/json
 */
router.delete('/', function(req,res, next){
    console.log(req.body , "req body movies")
    dynamodb.Update(req.body).then( data => {
        res.json({
            status: 201,
            body : data,
            api: "user"
        })
    })
});

module.exports = router;