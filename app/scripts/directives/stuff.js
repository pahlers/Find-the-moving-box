'use strict';

angular.module('findTheMovingBoxApp')
  .directive('stuff', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the stuff directive');
      }
    };
  });