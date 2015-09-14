var angular2_1 = require('angular2/angular2');
var app_1 = require('components/app/app');
var router_1 = require('angular2/router');
var universalInjectables = [
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
];
angular2_1.bootstrap(app_1.AppComponent, [universalInjectables]);
//# sourceMappingURL=bootstrap.js.map