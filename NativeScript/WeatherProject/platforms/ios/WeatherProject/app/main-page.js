var vmModule = require("./main-view-model");
var observable = require("data/observable");

function pageLoaded(args) {
    var page = args.object;
    var obj = new observable.Observable();
    obj.set("zip", "");
    page.bindingContext = vmModule.mainViewModel;
    page.bindingContext = obj;
}
exports.pageLoaded = pageLoaded;
