'use strict';
var _SERVER_BASE_URL = "http://localhost:8081"; /** the API base URL */
angular.
  module('establishmentApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/establishments', {
          template: '<establishment-list></establishment-list>'
        }).
        when('/establishment/:phoneId', {
          template: '<establishment-detail></establishment-detail>'
        }).
        otherwise('/establishments');
    }
  ]);
