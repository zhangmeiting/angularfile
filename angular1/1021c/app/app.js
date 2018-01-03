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
                templateUrl:'content/two.html',
                controller:'main'
            })
            .state('three',{
                url:'/three',
                templateUrl:'content/three.html',
                controller:'main'
            })
            .state('sones',{
                url:'/sones',
                templateUrl:'content/sones.html',
                controller:'main'
            })
        ;
        $urlRouterProvider.otherwise('/one');
    })
