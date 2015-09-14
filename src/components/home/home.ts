import {Component, View} from 'angular2/angular2';
import { Router} from 'angular2/router';

@Component({
    selector: 'home'
})
@View({
    templateUrl: 'templates/home.html'
})

export class HomeComponent {

    title:string;

    constructor(public router:Router){
        this.title = 'Home Page';
    }
}


