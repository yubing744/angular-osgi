import { EventEmitter } from "events";

class ServiceReference extends EventEmitter {
    constructor(tables) {
        super();

        this.tables = tables;
    }

    get() {
        return this.tables[0];
    }
    
    gets() {
        return this.tables;
    }
}

module.exports = ServiceReference;