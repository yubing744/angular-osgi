import angular from "angular-kernel";
import osgi from "angular-osgi";

osgi.injectTo(angular);

module.exports = angular.module("HelloA", ["ng-osgi"])
    .config(["$bundleProvider", function($bundleProvider){
        $bundleProvider.name = "HelloA",
        $bundleProvider.version = "0.1.0";
        $bundleProvider.exports = {
            osgi,
            angular
        } 
    }])
    .service("aservice", function(){
        return "Hello World!"
    })
    .run(["$context", "aservice", function($context, a){
        $context.registerService("aservice", aservice);

        var module3 = require("./module3");
        $context.loadPlugin([module3.name]);
    }]);