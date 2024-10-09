import { Component, computed, input, OnInit, signal, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardSecondComponent } from '../card-second/card-second.component';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Burger } from '../../../Model/Burger/burger';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [CardComponent,CardSecondComponent,NgTemplateOutlet,NgComponentOutlet],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css',
  animations: [
    trigger('componentAnimation', [
      state('showCard', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      state('showCardSecond', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('showCard <=> showCardSecond', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-in')
      ]),
    ])
  ]
})
export class MainCardComponent {
  isSelect=signal(true);
  index=input<number|null>(null);
  price=input<number|null>(null);
  name=input<string|null>(null);
  image=input<string|null>(null);
  obj=input<Burger|null>(null);
  getBioComponent() {
    return this.isSelect()?  CardComponent : CardSecondComponent;
  }
}
