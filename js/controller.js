var app = angular.module('myApp', ['ngStorage']);


app.run(function($rootScope) {
 
   $rootScope.settings=""
});


app.controller('appCtrl',function($scope,$rootScope,$localStorage, $window){

		var now = new Date();
var transDate = (now.getDay() + 1) + "|" + (now.getMonth() + 1) + "|" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        $scope.date = transDate;

        $scope.settings = {
        	merchant:'',
        	trade:'',
        	design:''
        }



      $scope.submit = function(settings){
      	if(settings.merchant === "" || settings.trade === "" || settings.design === ""){
      		alert("The Merchant field, Trading Address field and Designation field cannot be empty");
      		return;
      	}

        $window.localStorage.setItem('merchant',settings.merchant);
      	location.href = 'qrcode.html';
        // $state.go('register')
      }
	
});


app.controller('qrCtrl',function($scope,$localStorage, $window){

    function getRandom(length) {

       return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));

     }

     $scope.random = getRandom(8);   

  $scope.merchant = $window.localStorage.getItem("merchant");

});

app.controller('emailCtrl',function($scope){

    $scope.settings = {

    merchant:''

   }

  $scope.sendmail = function(settings){

   if (settings.merchant === "") {
     alert("The email field cannot be empty");
     return;
   }

   alert("Your email has been sent");

  }

});

// app.factory('Service', function(){
//   return {
//     data: {
//       merchant: 'kjhgf',
//       lastName: 'ojfdiieiie'
//     }
//     // Other methods or objects can go here
//   };
// });



