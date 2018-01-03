var app=angular.module('app',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('search',{
            url:'/search/:id',
            templateUrl:'content/add.html',
            controller:'main',
            resolve:{

            }
        })

    $urlRouterProvider.otherwise('/search/0');
})