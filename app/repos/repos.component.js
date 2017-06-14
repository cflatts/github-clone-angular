/* global angular */

angular.module('reposList')
  .component('reposList', {
    templateUrl: 'repos/repos.template.html',
    controller: ['Repo',
      function RepoListController (Repo) {
        this.repo = Repo.query()
      }
    ]
  })
