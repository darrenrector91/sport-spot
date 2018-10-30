myApp.controller('StandingsController', ['StandingsService', function (StandingsService) {
    // console.log('StandingsController created!');

    var self = this;
    self.standings = StandingsService.standings;
    self.teams = StandingsService.teams;


    // search function
    self.getResources = function () {
        StandingsService.getResources();

    }

    self.getResources();

}]);