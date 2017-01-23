/**
 * Created by Buddhi on 1/23/2017.
 */

angular.module('careApp.directives', [])
    .directive('projectCareApp', projectCareApp);

projectCareApp.$inject = [];

function projectCareApp() {
    return {
        restrict: 'E',
        templateUrl: 'app/core/project-care-app.html',
        controller: careAppController,
        controllerAs: 'vm'
    }
}

careAppController.$inject = [];

function careAppController() {
    var vm = this;
    vm.year = new Date().getFullYear();
}