angular.module("app", ["ui.router"])

		.config(function config($stateProvider)  {
			$stateProvider.state("index", {
				url:"",
				controller:"FirstCtrl as first",
				templateUrl: "Templates/first.html"
			})
		})

		.controller("FirstCtrl", function FirstCtrl () {
			var first = this;

			first.greeting = "First"
		})