(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', function($http,$scope){  
        	console.log("In the home controller");        	
        var refresh=function() {
	        
	    	$scope.containers = ([
	    	    {
	    	        containerId: 1,
	    	        containerName: "TestCon2"
	    	    },
	    	    {
	    	    	containerId: 2,
	    	        containerName: "TestContainer"
	    	    },
	    	    {
	    	        containerId: 3,
	    	        containerName: "_apaas"
	    	    },
	    	    {
	    	        containerId: 4,
	    	        containerName: "_developer"
	    	    },
	    	    {
	    	        containerId: 5,
	    	        containerName: "database"
	    	    },
	    	    {
	    	        containerId: 6,
	    	        containerName: "iot"
	    	    },
	    	    {
	    	        containerId: 7,
	    	        containerName: "iot2"
	    	    },
	    	    {
	    	        containerId: 8,
	    	        containerName: "iotContainer"
	    	    },
	    	    {
	    	        containerId: 9,
	    	        containerName: "jcs"
	    	    },
	    	    {
	    	        containerId: 10,
	    	        containerName: "testing1"
	    	    },
	    	    {
	    	        containerId: 11,
	    	        containerName: "testing5"
	    	    },
	    	    {
	    	        containerId: 12,
	    	        containerName: "testingPhani"
	    	    }
	    	     
	    	    
	    	    ]);
	    }
        
        
        
        
        /*function() {
        	$http({
          	     method: 'POST',
          	     url: 'http://10.39.194.158:8080/Oracle_Storage/storage/getContainer/login',
          	     headers: {'Content-Type': 'application/json'},
          	     headers:{'Access-Control-Allow-Origin':'true'},
          	   //  headers:{'Origin':'http://localhost/test'},
          	     data: {username: $scope.$root.globals.currentUser.username, password:  $scope.$root.globals.currentUser.password, identityDomain: $scope.$root.globals.currentUser.domain}             	
          	   }).then(function(response) {
          			$scope.containers = response;	         		   
          			console.log($scope.containers);
          	    }, function(err) {
          	    	console.log('ERR'+err);
          	   });
        }*/
        refresh();	        
    });
        	
    
        	
        	
        	/*['$scope', function($scope) {
        
        	    $scope.count = 0;
        	    $scope.containers = [];
        	    
        	    $scope.getContainers = function() {
        	        
        	    	$scope.containers = ([
        	    	    {
        	    	        containerId: 1,
        	    	        containerName: "Container1"
        	    	    },
        	    	    {
        	    	    	containerId: 2,
        	    	        containerName: "Container2"
        	    	    }
        	    	    ]);
        	    };
        	}]);*/
        	
        	/*$http({
        	     method: 'POST',
        	     url: 'http://10.39.227.17:8080/Oracle_Storage/storage/getContainer/login',
        	     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        	     headers: {'Access-Control-Allow-Origin': 'http://localhost:8081'},
        	     headers: {'Access-Control-Allow-Origin': 'true'},
        	     data: {username: $scope.$root.globals.currentUser.username, password: "Yellow99", storage_container:$scope.$root.globals.currentUser.domain}             	
        	 }).then(function(response) {
        	    // on success
        	 }, function(response) {
        		 $scope.greeting = response.data;
        		 console.log($scope.greeting);
        	 });*/
        	
        		/*$http.get('http://localhost:8081/Oracle_Storage/storage/getContainer').
                then(function(response) {
                    $scope.greeting = response.data;
                });	*/
       
            /*$http.get('http://rest-service.guides.spring.io/greeting').
            then(function(response) {
                $scope.greeting = response.data;
            });*/
     /*HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                    hitRestApiForLogin(vm);
                });
        }
        
        function hitRestApiForLogin(vm, function($scope, $http) {
        	$http({
        	    method: 'POST',
        	    url: 'http://10.159.143.176:8080/Oracle_Storage/storage/getContainer/login',
        	    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        	    transformRequest: function(vm) {
        	        var str = [];
        	        for(var p in vm)
        	        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(vm[p]));
        	        return str.join("&");
        	    },
        	    data: {username: $scope.userName, password: $scope.password, storage_container: $scope.domain}
        	}).then();
        })();
    	

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }
    }
*/
})();