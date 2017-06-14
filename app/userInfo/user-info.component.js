/* global angular */

angular.module('userInfo')
  .component('userInfo', {
    templateUrl: 'userInfo/user-info.template.html',
    controller: ['User',
      function UserInfoController (User) {
        this.user = User.query()
      }
    ]
  })
