import { EventEmitter } from "events";
import ServiceRegistration from "./ServiceRegistration";
import ServiceReference from "./ServiceReference";

class ServiceRegistry extends EventEmitter {
    constructor() {
        super();

        this.services = {};
    }

    ensureServiceTables(name) {
        var tables = this.services[name];

        if (!tables) {
            tables = this.services[name] = new Array();
        }

        return tables;
    }

    regiser(name, service) {
        var tables = this.ensureServiceTables(name);
        tables.push(service);

        return new ServiceRegistration(tables, name, service);
    }

    getService(name) {
        var tables = this.ensureServiceTables(name);
        return new ServiceReference(tables);
    }
}

module.exports = ServiceRegistry;