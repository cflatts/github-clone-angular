/* global angular */

angular.module('core.user')
  .factory('User', ['$resource',
    function ($resource) {
      return $resource('https://api.github.com/users/:username?access_token=' + TOKEN, {},
        {
          query: {
            method: 'GET',
            params: {username: 'cflatts'}
          }
        })
    }])
