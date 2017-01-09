import angular from "angular-kernel";
import osgi from "angular-osgi";

import module1 from "./module1";
import module2 from "./module2";

osgi.bootstrap(angular, [
    module1.name, module2.name
]);



