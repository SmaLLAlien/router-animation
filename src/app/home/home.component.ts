import {Component, Host, HostBinding, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('homeTransition', [
      transition(':enter', [
        query('.block', style({opacity: 0, transform: 'translateY(100%)'})),
        query('.block', stagger(333, animate(1000, style({opacity: 1, transform: 'translateY(0%)'}))), { optional: true })
      ]),
      transition('*=>void', [
        query('.block', stagger(166, animate(500, style({opacity: 0, transform: 'translateY(100%)'}))))
      ])
    ])
  ],
})
export class HomeComponent implements OnInit {
  @HostBinding('@homeTransition') homeTransition = '';

  constructor() { }

  ngOnInit(): void {
  }

}
