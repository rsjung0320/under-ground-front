var API = (function() {
  'use strict';

  var GET = 'GET';
  var POST = 'POST';
  var DELETE = 'DELETE';
  
  // var postRefreshToken = '/login/token/refresh/';
  // var postRegenerateToken = '/login/token/regenerate/';
  // var postSignin = '/login/signin/';
  // var postSignUp = '/login/signup/';
  // var postUserInfo = '/api/v1/user/';


  var postRefreshToken = 'http://localhost:8080/login/token/refresh/';
  var postRegenerateToken = 'http://localhost:8080/login/token/regenerate/';
  var postSignin = 'http://localhost:8080/login/signin/';
  var postSignUp = 'http://localhost:8080/login/signup/';
  var postUserInfo = 'http://localhost:8080/api/v1/user/';


  /*----------- API Interface -----------------*/
  return {
    GET: GET,
    POST: POST,
    DELETE: DELETE,
    postRefreshToken: postRefreshToken,
    postRegenerateToken: postRegenerateToken,
    postSignin: postSignin,
    postSignUp: postSignUp,
    postUserInfo: postUserInfo
  };
  /*------------------------------------------------------*/
})(API);
