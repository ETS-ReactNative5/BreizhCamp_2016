angular.module('weather')

.controller('WeatherCtrl', function($http, $scope) {
  console.log('on est ici');
  $scope.search = '';
  $scope.state = false;
  $scope.props = {
    icon: '',
    main: '',
    city: '',
    description: '',
    temp: ''
  };

  $scope.loadWeather = function(search, $event) {
    if ($event.keyCode === 13) { // 'Enter' key was pressed
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
                search + '&units=metric&appid=7dde7bb476d674e5ea93cd95e0e7e0a8';
      $http.get(url).success(function(data) {
        $scope.props.icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        $scope.props.main = data.weather[0].main;
        $scope.props.city = data.name;
        $scope.props.description = data.weather[0].description;
        $scope.props.temp = data.main.temp;
        $scope.state = true;
      });
      console.log(search);

    }
  }
})
