baSurvey.controller('landingCtrl', ['$scope', '$location',
	function($scope, $location) {
		$scope.newOrganization = function () {
			$location.path('/como-recibir-ayuda');
		};

		// Remove modal-backdrop element
		var elements = document.getElementsByClassName('modal-backdrop');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
	}
]);
