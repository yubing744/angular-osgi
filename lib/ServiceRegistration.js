import { EventEmitter } from "events";

class ServiceRegistraction extends EventEmitter {
    constructor(tables, name, service) {
        super();

        this.tables = tables;
        this.name = name;
        this.service = service;
    }

    unRegiser() {
        var index = this.tables.indexOf(this.service);
        this.tables.splice(index, 1);
    }
}

module.exports = ServiceRegistraction;