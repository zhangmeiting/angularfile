var app=angular.module('app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/one/:num',{
            templateUrl:'view/view.html',
            controller:'main'
        })
        //.when('/two/:num',{
        //    templateUrl:'view/view.html',
        //    controller:'main'
        //})
        //.when('/three/:num',{
        //    templateUrl:'view/view.html',
        //    controller:'main'
        //})
        //.when('/four/:num',{
        //    templateUrl:'view/view.html',
        //    controller:'main'
        //})
        //.when('/five/:num',{
        //    templateUrl:'view/view.html',
        //    controller:'main'
        //})
        //.when('/six/:num',{
        //    templateUrl:'view/view.html',
        //    controller:'main'
        //})
        //.when('/seven/:num',{
        //    templateUrl:'view/view.html',
        //    controller:'main'
        //})
        //.when('/eight/:num',{
        //    templateUrl:'view/view.html',
        //    controller:'main'
        //})
        .otherwise({
            redirectTo:'/one/0'
        })
})