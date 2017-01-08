import angular from "angular-kernel"
import { EventEmitter } from "events";

class BundleContext extends EventEmitter {
    constructor(serviceRegistry) {
        super();

        this.parent = null;
        this.serviceRegistry = serviceRegistry;
    }

    registerService(name, service) { 
        return this.serviceRegistry.regiser(name, service);
    }

    getService(name) { 
        var ref;

        if (this.parent != null) {
            ref = this.parent.getService(name);
        }

        if (!ref) {
            return this.serviceRegistry.getService(name);
        }
    }

    loadModule(name) {
        var bundle = this;

        var bridge = angular.module(name + "-bridge")
            .decorator("$bundle", ["$delegate", function($delegate) {
                $delegate.parent = bundle;
            }]);

        return angular.createInjector(["ng-osgi", name, bridge.name]);
    }
}

module.exports = BundleContext;