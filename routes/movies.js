var express = require('express');

var router = express.Router();

/** 
 *  This route will respond to movies
 *  @route GET /movies/
 *  @group movies - get the movies list
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
    res.send("movie api call");
});

/** 
 *  This route will respond to movies
 *  @route GET /movies/{id}
 *  @group movies - get the movies list by id
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
    res.send("here in the movies/id");
});


/**
 * JSON parameters require a model. This one just has "name"
 * @typedef ReqMovieJSON
 * @property {string} movie.required - name of person making request - eg: Test
 */

/** 
 *  This route will respond to movies
 *  @route POST /movies/
 *  @group movies - post new movies
 *  @param {ReqMovieJSON.model} movie.body.required
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
    console.log(req.body , "req body movies")
    res.json({
        status: 200,
        body : req.body.movie,
        api: "movies"
    })
});

/**
 * JSON parameters require a model. This one just has "name"
 * @typedef ReqUpdateMovie
 * @property {string} movie.required - name of person making request - eg: Test
 */

/** 
 *  This route will respond to movies
 *  @route PUT /movies/
 *  @group movies - update movies
 *  @param {ReqUpdateMovie.model} movie.body.required
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
    console.log(req.body , "req body movies")
    res.json({
        status: 201,
        body : req.body.movie,
        api: "movies"
    })
});

/**
 * JSON parameters require a model. This one just has "name"
 * @typedef ReqDeleteMovies
 * @property {string} movie.required - name of person making request - eg: Test
 */

/** 
 *  This route will respond to movies
 *  @route Delete /movies/{ReqDeleteMovies}
 *  @group movies - update movies
 *  @param {ReqDeleteMovies.model} movie.body.required
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
    console.log(req.body , "req body movies deleted")
    res.json({
        status: 200,
        body : req.body.movie,
        api: "movies deleted"
    })
});

module.exports = router;