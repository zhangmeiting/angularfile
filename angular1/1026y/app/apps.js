var app=angular.module('app',['ui.router']);



app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('one',{
            url:'/one',
            templateUrl:'view/one.html',
            controller:'main'
        })
        .state('two',{
            url:'/two',
            templateUrl:'view/two.html',
            controller:'main'
        })
        .state('three',{
            url:'/three',
            templateUrl:'view/one.html',
            controller:'main'
        })
        .state('four',{
            url:'/four',
            templateUrl:'view/two.html',
            controller:'main'
        })
        .state('five',{
            url:'/five',
            templateUrl:'view/two.html',
            controller:'main'
        });
    $urlRouterProvider.otherwise('/one')
})