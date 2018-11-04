myApp.controller('ArticlesController', ['ArticlesService', function (StandingsService) {
    console.log('ArticlesController created!');

    var self = this;
    self.articles = ArticlesService.articles;


    // search function
    self.getArticles = function () {
        ArticlesService.getResources();

    }

    self.getArticles();

}]);