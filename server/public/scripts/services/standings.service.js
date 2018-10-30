myApp.service('StandingsService', ['$http', function ($http) {
    console.log('StandingsService loaded!');
    var self = this;
    nflApi = '37eew9vyws8rp5etrfqbtnp2';

    self.resources = {
        list: []
    };


    self.standings = {
        list: []
    };

    // get resources function
    self.getResources = function () {
        $http({
            method: 'GET',
            url: 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/standings.json?api_key=37eew9vyws8rp5etrfqbtnp2',
        }).then(function (response) {
            self.resources.list = response.data;
            console.log(response);

        })
    };

    self.searchStandings = function () {
        console.log('in searchStandings service');

        $http({
            method: 'GET',
            url: 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/standings.json?api_key=37eew9vyws8rp5etrfqbtnp2'
        }).then(function (response) {
            self.standings.list = response.data.results;
            console.log('self.standings.list', self.standings.list);
        })
    };
}]);






