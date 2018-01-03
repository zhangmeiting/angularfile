/**
 * Created by Administrator on 2017/10/19.
 */
var app=angular.module("app",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("server",{
            url:"/server",
            templateUrl:"App/View/server.html",
            controller:"serverController"
        })
        .state("jr",{
            url:"/jr",
            templateUrl:"App/View/jr.html",
            controller:"jrController"
        });
    $urlRouterProvider.otherwise("/server");
});