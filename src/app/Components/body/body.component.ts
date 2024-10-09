import { ChangeDetectionStrategy, Component, ElementRef, QueryList, viewChild, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import {CardComponent }  from '../card/card.component';
import {CardSecondComponent} from '../card-second/card-second.component';
import { MatIconModule } from '@angular/material/icon';
import { MainCardComponent } from '../main-card/main-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent,CardSecondComponent,MatIconModule,MainCardComponent,NgFor],
  templateUrl: './body.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './body.component.css'
})
export class BodyComponent {
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
