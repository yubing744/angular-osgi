import { EventEmitter } from "events";

class BundleContext extends EventEmitter {
    constructor(angular, bundle, registry) {
        super();

        this.angular = angular;
        this.bundle = bundle;
        this.registry = registry;
    }

    registerService(name, service) { 
        return this.registry.regiser(name, service);
    }

    getService(name) { 
        return this.registry.getService(name);
    }

    loadPlugin(name) {
        var self = this;

        var bridge = this.angular.module(name + "-bridge")
            .decorator("$registry", ["$delegate", function($delegate) {
                $delegate.parent = self.registry;
            }]);

        return this.angular.createInjector(["ng-osgi", name, bridge.name]);
    }
}

module.exports = BundleContext;