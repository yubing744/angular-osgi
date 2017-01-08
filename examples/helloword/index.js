import angular from "angular-kernel";
import osgi from "angular-osgi";

angular.module("HelloA", [osgi.name])
    .config(function(){

    })
    .service("aservice", function(){

    })
    .run(["$bundle", "aservice", function($bundle, a){
        $bundle.registerService("aservice", aservice);

        var hellowB = require("HelloB");
        $bundle.loadModule(hellowB);
    }])

angular.module("HelloB", [osgi.name])
    .config(function(){

    })
    .service("aservice", ["$bundle", function($bundle){
        var ref = $bundle.getServiceRefrence("aservice");
        return ref.get();
    }])
    .run(["$bundle", "aservice", function($bundle, a){
        $bundle.registerService("aservice", aservice)
    }])