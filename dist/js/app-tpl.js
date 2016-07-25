(function(){angular.module('template-cache', []).run(['$templateCache', function($templateCache) {$templateCache.put('./template/github-user-repositories.html','<section data-ng-controller="GithubUserRepositoriesController as vm">\n  <h1>{{vm.str.title}}</h1>\n\n  <hr />\n\n  <form ng-submit="vm.getRepositories()">\n\n    <div class="input-group">\n\n      <span class="input-group-addon">{{vm.str.userName}} :</span>\n\n      <input\n        type="text"\n        class="form-control"\n        placeholder="{{vm.str.usernamePlaceholder}}"\n        data-ng-trim="false"\n        data-ng-model="vm.userName"\n        data-ng-keypress="vm.stripUserName($event)"\n        aria-describedby="basic-addon"\n        data-ng-model-options="vm.userNameModelOptions" />\n\n    </div>\n\n  </form>\n\n  <hr />\n\n  <link-listing\n    data-ng-if="vm.repositories.length"\n    data-links="vm.repositories">\n  </link-listing>\n\n  <div\n    class="alert alert-danger"\n    data-ng-if="vm.error.length"\n    role="alert">{{vm.error}}</div>\n</section>\n');
$templateCache.put('./template/link-listing.html','<div class="list-group">\n\n  <a\n    target="_blank"\n    class="list-group-item"\n    data-ng-href="{{linkListItem.link}}"\n    data-ng-repeat="linkListItem in linkList | orderBy: \'name\' track by linkListItem.id">\n\n    <h4 class="list-group-item-heading">{{linkListItem.name}}</h4>\n    <p class="list-group-item-text">{{linkListItem.link}}</p>\n\n  </a>\n\n</div>\n');}]);})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC10cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtHQUFBO0FBQ0EiLCJmaWxlIjoiYXBwLXRwbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbXX0=