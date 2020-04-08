import {Component, HostBinding, OnInit} from '@angular/core';
import {animate, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('contactTransition', [
      transition(':enter', [
        query('.block', style({transform: 'translateY(-50%)', opacity: 0})),
        query('.block', stagger(333, [
          animate(1000, keyframes([
            style({transform: 'translateY(0%)', opacity: 1, offset: 0.4}),
            style({transform: 'translateY(-20%)', opacity: 1, offset: 0.6}),
            style({transform: 'translateY(0%)', offset: 0.8}),
            style({transform: 'translateY(-10%)', offset: 0.9}),
            style({transform: 'translateY(0%)', offset: 1}),
          ]))
        ]))
      ]),
      transition(':leave', [
        query('.block', stagger(-333, [
          animate(1000, style({
            transform: 'translateX(200%) rotate(360deg)',
            opacity: 0
          }))
        ]))
      ])
    ])
  ]

})
export class ContactComponent implements OnInit {
  @HostBinding('@contactTransition') contactTransition;
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
}
