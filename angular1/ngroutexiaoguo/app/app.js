var app=angular.module('app',['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/tab", {
            templateUrl: "views/tab.html",
            controller: "main"
        })
        .when("/piano", {
            templateUrl: "views/piano.html",
            controller: "main1"
        })
        .when("/autoplay", {
            templateUrl: "views/lunbo.html",
            controller: "main3"
        })
        .otherwise({
            redirectTo:'/tab'
        });
});