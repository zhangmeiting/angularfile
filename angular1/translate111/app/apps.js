var app=angular.module('app',['pascalprecht.translate']);
          //app.factory('adds',['add',function(add){
          //          var servers={
          //              gets:function(languages){
          //                  return add.server('get','http://localhost:8090/?'+languages);
          //              }
          //          }
          //          return servers;
          //      }])

           app.config('$translateProvider',function($translateProvider){
                $translateProvider.useStaticFilesLoader({
                    prefix:'data/',
                    suffix:'.json'
                });
                $translateProvider.preferredLanguage('cn');
            });


        app.controller('main',['$scope','$translate',function($scope,$translate){
            $scope.languages='cn';
            $scope.changes=function(vals){
                $translate.use(vals);
            }
        }]);