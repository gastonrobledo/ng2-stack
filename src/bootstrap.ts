import { bootstrap, bind } from 'angular2/angular2';
import { AppComponent } from 'components/app/app';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

var universalInjectables = [
    ROUTER_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];


bootstrap(AppComponent, [universalInjectables]);