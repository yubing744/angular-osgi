import angular from "angular-kernel"
import ServiceRegistry from "./ServiceRegistry";
import BundleContext from "./BundleContext";

module.exports = angular.module("ng-osgi", [])
    .service("$registry", function(){
        return new ServiceRegistry();
    })
    .service("$bundle", ["$registry", function($registry){
        return new BundleContext($registry);
    }]);