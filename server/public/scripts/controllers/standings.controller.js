myApp.controller('StandingsController', ['StandingsService', function (StandingsService) {
    console.log('StandingsController created!');

    var self = this;

    // search function
    self.getResources = function () {
        StandingsService.getResources();
        self.getResources = "";

    }


    // search function
    // self.searchSwapi = function (resource, keyword) {
    //     SwapiService.searchSwapi(resource, keyword);
    //     self.searchSwapi = " ";

    // }


}]);