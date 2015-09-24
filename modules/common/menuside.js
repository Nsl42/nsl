var nslApp = angular.module("nslApp");


nslApp.directive("menuSide", function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="col-sm-3 col-md-3 sidebar menu-side">'+
                    '<ul class="nav nav-sidebar">'+
                        '<li class ="element-side"><a href="#">Applications</a></li>'+
                        '<li class="element-side"><a href="">Settings</a></li>'+
                    '</ul>'+
                '</div> ',
        link: function(scope, element, attrs){
            scope.showMe = false;
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
            };
        }
    };
});