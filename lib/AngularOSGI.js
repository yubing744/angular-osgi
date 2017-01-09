import ServiceRegistry from "./ServiceRegistry";
import BundleContext from "./BundleContext";
import BundleProvider from "./BundleProvider";

module.exports = {
    loaded: false,
    injectTo: function(angular){
        if (this.loaded) {
            return this.loaded;
        }
        
        this.loaded = angular.module("ng-osgi", [])
            .provider("$bundle", BundleProvider)
            .service("$registry", function(){
                return new ServiceRegistry();
            })
            .service("$context", ["$bundle", "$registry", function($bundle, $registry){
                return new BundleContext($bundle, $registry);
            }]);

        return this.loaded;
    },
    bootstrap: function(angular, modules){
        this.injectTo(angular);
        angular.bootstrap(modules);
    }
}