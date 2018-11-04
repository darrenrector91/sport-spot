myApp.service('ArticlesService', ['$http', function ($http) {
    console.log('ArticlesService loaded!');
    var self = this;

    self.articles = {
        list: []
    }

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






