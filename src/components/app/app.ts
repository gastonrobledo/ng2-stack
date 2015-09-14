import {Component, View} from 'angular2/angular2';
import {RouterOutlet, RouteConfig, RouterLink, Router} from 'angular2/router';
import { HomeComponent } from '../home/home';


@Component({
    selector: 'app'
})
@View({
    directives: [RouterOutlet, RouterLink],
    templateUrl: 'templates/main.html'
})

@RouteConfig([
    { path: '/',   as: 'home',   component: HomeComponent }
])

export class AppComponent {


    constructor(public router:Router){

    }
}