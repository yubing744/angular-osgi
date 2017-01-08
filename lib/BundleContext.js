import angular from "angular-kernel"
import { EventEmitter } from "events";

class BundleContext extends EventEmitter {
    constructor(serviceRegistry) {
        super();

        this.serviceRegistry = serviceRegistry;
    }

    registerService(name, service) { 
        return this.serviceRegistry.regiser(name, service);
    }

    getService(name) { 
        return this.serviceRegistry.getService(name);
    }

    loadPlugin(name) {
        var self = this;

        var bridge = angular.module(name + "-bridge")
            .decorator("$registry", ["$delegate", function($delegate) {
                $delegate.parent = self.serviceRegistry;
            }]);

        return angular.createInjector(["ng-osgi", name, bridge.name]);
    }
}

module.exports = BundleContext;