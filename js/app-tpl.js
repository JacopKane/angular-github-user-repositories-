(function(){angular.module('template-cache', []).run(['$templateCache', function($templateCache) {$templateCache.put('./template/link-listing.html','<div class="list-group">\n\n  <a\n    target="_blank"\n    class="list-group-item"\n    data-ng-if="repositories.length"\n    data-ng-href="{{repository.link}}"\n    data-ng-repeat="repository in repositories">\n\n    <h4 class="list-group-item-heading">{{repository.name}}</h4>\n    <p class="list-group-item-text">{{repository.link}}</p>\n\n  </a>\n\n</div>\n');}]);})();