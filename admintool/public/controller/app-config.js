
var app = angular.module('trackerApp', ['ngRoute', 'actionController', 'actionViewController', 'employeeActionsController', 'employeeActionController', 'defaultersController', 'giveDataController', 'crudController', 'directives', 'xlController']);

function resolveDetails(dataArray) {
return {
    "collections": function() {
        return {
            data :  dataArray};
    }
};
}


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/eyebanks', {
            templateUrl: 'partials/eyebanks.html',
            controller: 'CRUDController',
            resolve: resolveDetails(['eyebank'])
        }).
        when('/eyebank/new', {
            templateUrl: 'partials/eyebank-new.html',
            controller: 'CRUDController',
            resolve: resolveDetails(['eyebank'])})
        .when('/eyebank/import', {
            templateUrl: 'partials/eyebank-import.html',
            controller: 'XLController'})
        .when('/eyebank/update/:id', {
            templateUrl: 'partials/eyebank-update.html',
            controller: 'CRUDController',
            resolve: resolveDetails(['eyebank'])})
        .when('/skinbanks', {
                templateUrl: 'partials/skinbanks.html',
                controller: 'CRUDController',
                resolve: resolveDetails(['skinbank'])
            }).
        when('/skinbank/new', {
            templateUrl: 'partials/skinbank-new.html',
            controller: 'CRUDController',
            resolve: resolveDetails(['skinbank'])})
            .when('/skinbank/import', {
                templateUrl: 'partials/skinbank-import.html',
                controller: 'XLController'})
            .when('/skinbank/update/:id', {
                templateUrl: 'partials/skinbank-update.html',
                controller: 'CRUDController',
                resolve: resolveDetails(['skinbank'])})
            .when('/bodydonations', {
                templateUrl: 'partials/bodydonations.html',
                controller: 'CRUDController',
                resolve: resolveDetails(['bodydonation'])
            }).
        when('/bodydonation/new', {
            templateUrl: 'partials/bodydonation-new.html',
            controller: 'CRUDController',
            resolve: resolveDetails(['bodydonation'])})
            .when('/bodydonation/import', {
                templateUrl: 'partials/bodydonation-import.html',
                controller: 'XLController'})
            .when('/bodydonation/update/:id', {
                templateUrl: 'partials/bodydonation-update.html',
                controller: 'CRUDController',
                resolve: resolveDetails(['bodydonation'])})

            .when('/actions', {
            templateUrl: 'partials/action-list.html',
            controller: 'CRUDController',
            resolve: resolveDetails(['action', 'project'])
        }).
        when('/action/new', {
            templateUrl: 'partials/action-new.html',
            controller: 'CRUDController',
            resolve: resolveDetails(['action', 'project'])})
        .when('/action/update/:id', {
            templateUrl: 'partials/action-update.html',
            controller: 'CRUDController',
            resolve: resolveDetails(['action', 'project'])})
        .when('/employee-actions/employee/:employeeId', {
            templateUrl: 'partials/employee-actions-view.html',
            controller: 'EmployeeActionsController'
        }).
        when('/employee-actions/employee/:employeeId/action/:actionId', {
            templateUrl: 'partials/employee-actions-view.html',
            controller: 'EmployeeActionsController'
        }).
        when('/employee-actions/employee/:employeeId/action/:actionId', {
            templateUrl: 'partials/employee-action-view.html',
            controller: 'EmployeeActionController'
        }).
        when('/defaulters', {
            templateUrl: 'partials/defaulters.html',
            controller: 'DefaultersController'
        }).
        when('/report', {
            templateUrl: 'partials/report.html',
            controller: 'DefaultersController'
        }).
        when('/give-data/:actionId', {
            templateUrl: 'partials/give-data.html',
            controller: 'GiveDataController'
        }).
        when('/projects', {
            templateUrl: 'partials/project-list.html',
            controller: 'CRUDController',
                    resolve: resolveDetails(['project'])
        }).
        when('/project/new', {
            templateUrl: 'partials/project-new.html',
            controller: 'CRUDController',
            resolve: resolveDetails(['project'])})
       .when('/project/update/:id', {
            templateUrl: 'partials/project-update.html',
            controller: 'CRUDController',
           resolve: resolveDetails(['project'])})
        .when('/action/leave', {
            //TODO
            templateUrl: 'partials/',
            controller: 'ActionController'
        });
    }]);
