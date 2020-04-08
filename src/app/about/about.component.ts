import {Component, HostBinding, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('aboutTransition', [
      transition(':enter', [
        query('.block', style({opacity: 0, transform: 'translateX(-100%)'})),
        query('.block', stagger(-333, [animate(1000, style({opacity: 1, transform: 'translateX(0%)'}))]))
      ]),
      transition(':leave', [
        query('.block', stagger(-333, [animate(1000, style({opacity: 0, transform: 'translateX(100%)'}))]))
      ])
    ])
  ]

})
export class AboutComponent implements OnInit {

  @HostBinding('@aboutTransition') aboutTransition;

  constructor() { }

  ngOnInit(): void {
  }

}
