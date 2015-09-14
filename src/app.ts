import {HTTP_BINDINGS} from 'angular2/http';
import {bootstrap, bind, Component, View, Inject} from 'angular2/angular2';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import { HomeComponent } from 'components/home/home';


@Component({
    selector: 'app',
    injectables: [Router]
})
@View({
    directives: [ROUTER_DIRECTIVES],
    template: `
        <header>
            This is the header
        </header>
        <section>
            <router-outlet></router-outlet>
        </section>
        <footer>
            This is the footer.
        </footer>
    `
})

@RouteConfig([
    {path: '/', component: HomeComponent}
])

export class AppComponent {


    constructor(public router:Router) {

    }
}

bootstrap(AppComponent, [HTTP_BINDINGS, ROUTER_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]);