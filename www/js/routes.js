/**
 *
 * @param $routeProvider
 */

var configureRoutes = function($routeProvider) {

  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: '/partials/home.html',
      title: 'Write to your representatives'
    })
    .when('/location', {
      controller: 'LegislatorPickerController',
      templateUrl: '/partials/legislator_picker.html',
      title: 'Select your recipients'
    })
    .when('/representatives', {
      controller: 'MessageFormController',
      templateUrl: '/partials/message_form.html',
      title: 'Write your letter'
    })
    .when('/thanks', {
      controller: '',
      templateUrl: '/partials/thanks.html',
      title: 'Message sent!'
    })
    .when('/about', {
      controller: 'AboutController',
      templateUrl: '/partials/about.html',
      title: 'About'
    })
    .otherwise({
      redirectTo: '/'
    });

};

module.exports = configureRoutes;