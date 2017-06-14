/* global angular */

angular.module('core.repo')
  .factory('Repo', ['$reource', function ($resource) {
    return $resource('https://api.github.com/users/:username/repos?access_token=' + TOKEN, {}, {
      query: {
        method: 'GET',
        params: {username: 'cflatts'}
      }
    })
  }])
