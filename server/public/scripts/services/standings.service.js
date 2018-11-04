myApp.service('StandingsService', ['$http', function ($http) {
    console.log('StandingsService loaded!');
    var self = this;
    nflApi = '37eew9vyws8rp5etrfqbtnp2';

    self.standings = {
        list: []
    };

    self.teams = {
        list: []
    }

    self.articles = {
        list: []
    }

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAfMqR3ATYE6jg3TPH_0OOLoph83S9IMxk",
        authDomain: "blue-62.firebaseapp.com",
        databaseURL: "https://blue-62.firebaseio.com",
        projectId: "blue-62",
        storageBucket: "blue-62.appspot.com",
        messagingSenderId: "524336894022"
    };
    firebase.initializeApp(config);

    // Get a reference to the database service
    var firebaseDatabase = firebase.database();
    console.log(firebase.app().name);




    // get resources function
    self.getResources = function () {
        $http({
            method: 'GET',
            url: 'http://api.sportradar.us/nfl/official/trial/v5/en/seasons/2018/standings.json?api_key=' + nflApi,
        }).then(function (response) {
            self.standings.list = response;
            // console.log(response);
            var teams = (self.standings.list.data.conferences[1].divisions[1]);
            var getTeamNames = teams.teams;
            self.teams.list = getTeamNames;
        })
    };

    // get article data form firebase database
    self.getArticles = function () {
        $http({
            method: 'GET',
            url: '',
        }).then(function (response) {
            self.articles.list = response;
            console.log(response);

        })
    };

}]);






