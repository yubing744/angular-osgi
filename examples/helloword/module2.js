import angular from "angular-kernel";
import osgi from "angular-osgi";

osgi.injectTo(angular);

module.exports = angular.module("HelloB", ["ng-osgi"])
     .config(["$bundleProvider", function($bundleProvider){
        $bundleProvider.name = "HelloB",
        $bundleProvider.version = "0.1.0";
        $bundleProvider.exports = {
            osgi,
            angular
        } 
    }])
    .service("aservice", ["$context", function($context){
        var ref = $context.getServiceRefrence("aservice");
        return ref.get();
    }])
    .run(["$context", "aservice", function($context, a){
        $context.registerService("aservice", aservice)
    }]);