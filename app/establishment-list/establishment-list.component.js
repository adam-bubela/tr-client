'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('establishmentList').
  filter('times', function(){
        return function(value){
           return _.times(value || 0);
        }
     }).
  component('establishmentList', {
    templateUrl: 'app/establishment-list/establishment-list.template.html',
    controller: ['$scope','FilterEst','SearchRanges',function($scope,FilterEst,SearchRanges) {
        
        var self = this;
             
        /** Load initial DB values */    
        $scope.$init = SearchRanges.query();
        self.searching  = false;
       
            
             
        $scope.querySearchHotel = function(){
        
           if(self.Name.length<3) return false; /** prevent empty queries */
           self.noRecords = false;
           self.searching  = true;
           
            for(var i in self)/** Serialize objects to GET params */
              if(angular.isArray(self[i])) 
                  self[i] = JSON.stringify(self[i]);
                
           
            return FilterEst.query(self, function(res) {
                self.searching  = false;
                $scope.establishments = res;
                if(!res.total) self.noRecords = true;
            });    
        }
        
    
      }
    ]
   
  });
  
  