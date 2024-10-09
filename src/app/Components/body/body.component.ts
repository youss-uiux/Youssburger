import { ChangeDetectionStrategy, Component, ElementRef, QueryList, viewChild, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import {CardComponent }  from '../card/card.component';
import {CardSecondComponent} from '../card-second/card-second.component';
import { MatIconModule } from '@angular/material/icon';
import { MainCardComponent } from '../main-card/main-card.component';
import { NgFor } from '@angular/common';
import { Burger } from '../../../Model/Burger/burger';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent,CardSecondComponent,MatIconModule,MainCardComponent,NgFor],
  templateUrl: './body.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './body.component.css'
})
export class BodyComponent {
  burgers: Burger[] = [
    {
      index:1,
      name: 'Classic Burger',
      price: 5.99,
      calories: 550,
      image:'img/1.png'
    },
    {
      index:2,
      name: 'Cheese Burger',
      price: 6.49,
      calories: 600,
      image:'img/13.png'
    },
    {
      index:3,
      name: 'Bacon Burger',
      price: 7.29,
      calories: 700,
      image:'img/12.png'
    },
    {
      index:4,
      name: 'Veggie Burger',
      price: 6.99,
      calories: 450,
      image:'img/vegi.png'
    },
    {
      index:5,
      name: 'Spicy Chicken Burger',
      price: 7.49,
      calories: 620,
      image:'img/chiken.png'
    },
  ];
  @ViewChildren(MainCardComponent) mainCardComponent!: QueryList<MainCardComponent>;
  change(index:number){
    console.log(index);
    this.mainCardComponent.forEach(card=>{
      if(card.index() !== index){
        card.isSelect.set(false);
      }
      else{
        card.isSelect.set(true);
      }
    })
  }
    
}
