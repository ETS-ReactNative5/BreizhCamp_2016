
function pageLoaded(args) {
    var page = args.object;
    pageData.set("beers", beerList);
    page.bindingContext = pageData;
}

exports.pageLoaded = pageLoaded;


var observableArrayModule = require("data/observable-array");
var beerList = new observableArrayModule.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();

exports.beers = function() {
  var http = require("http");

  http.getJSON("http://beertutorials.github.io/website/beers/beers.json").then(function(r) {

      console.log("Avant", JSON.stringify(r));

      beerList.length = 0;

      for (var i = 0; i < r.length ; i++) {

        var beer = {
          name: r[i].name,
          description: r[i].description,
          alcohol: r[i].alcohol,
          img: "http://beertutorials.github.io/website/"+r[i].img
        };
        beerList.push(beer);
        console.log("beer", JSON.stringify(beer));
      }

      console.log("Apres", JSON.stringify(beerList));

  }, function(e) {

      console.log(e);

  });
};
