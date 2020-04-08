import { Component } from '@angular/core';
import {slideInAnimation} from './route-animation';
import {RouterOutlet} from '@angular/router';
import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'application-name';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
