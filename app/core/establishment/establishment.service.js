'use strict';

angular.
  module('core.establishment').
  factory('Establishment', ['$resource',
    function($resource) {
      return $resource('establishment/:id', {}, {
        query: {
          method: 'GET',
          params: {EstablishmentId: 'establishment'},
          isArray: true
        }
      });
    }
  ]).
  factory('FilterEst', ['$resource',
    function($resource) {
      return $resource(_SERVER_BASE_URL+'/search', {
         
      }, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]).
  factory('SearchRanges', ['$resource',
    function($resource) {
      return $resource(_SERVER_BASE_URL+'/ranges', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]);
