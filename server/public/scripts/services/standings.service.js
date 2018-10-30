myApp.service('StandingsService', ['$http', function ($http) {
    // console.log('StandingsService loaded!');
    var self = this;
    nflApi = '37eew9vyws8rp5etrfqbtnp2';

    self.standings = {
        list: []
    };

    self.teams = {
        list: []
    }

    // get resources function
    self.getResources = function () {
        $http({
            method: 'GET',
            url: 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/standings.json?api_key=' + nflApi,
        }).then(function (response) {
            self.standings.list = response;
            console.log(response);
            var teams = (self.standings.list.data.conferences[1].divisions[1]);
            var getTeamNames = teams.teams;
            self.teams.list = getTeamNames;
        })
    };

}]);






