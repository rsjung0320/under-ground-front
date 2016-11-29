'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SignupSignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('SignupCtrl', function($scope, $http, $location) {

    $scope.pwHidden = false;

    $scope.submit = function() {
      console.log("userName : " + $scope.userName);
      console.log("email : " + $scope.email);

      // 1. validation 체크를 한다.
      //  1.1 password와 confirmPassword와 일치하는지 본다.
      //  1.2 TTA 인증 방식 코드르 가져와서 검증한다.
      // 2. 서버로 값을 보낸다.
      if ($scope.form.$valid) {
        if ($scope.password === $scope.confirmPassword) {
          $http({
              url: API.postSignUp,
              method: "POST",
              data: {
                name: $scope.userName,
                email: $scope.email,
                password: $scope.password
              }
              // headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWxseSIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE0NzMzOTc3Mzh9.lE-2brVPuZNWnz-x-xJJszdQmFTMBTOgZG4Ql9jItJs"}
            })
            .success(function(data, status, headers, config) {
              console.log('success data : ', data);

              if (status === 201) {
                // 3-1. susscess 시 path를 /로 이동시켜준다.
                alert('Successfully Signed Up!');
                $location.path('/login');
              }
            }).error(function(data, status, headers, config) {
              if (status === 400) {
                alert('The user already exists.');
              } else {
                alert(data);
              }
            });
        } else {
          alert('Password and confirmed password do not match.');
        }

        // 3. 성공 시 메인화면으로 보낸다.\
        //  3-1. 실패 시 에러메시지를 화면에 보여준다.
      } else {
        $scope.pwHidden = true;
      }
    };

    $scope.initPassword = function() {
      $scope.password = '';
      $scope.confirmPassword = '';
    }

    $scope.initForm = function() {
      $scope.email = '';
      $scope.password = '';
      $scope.confirmPassword = '';
    }

    $scope.hidePwErrorMsg = function() {
      $scope.pwHidden = false;
    }
  });
