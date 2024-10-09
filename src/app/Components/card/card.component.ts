import { ChangeDetectionStrategy, Component,computed,Input,OnInit  } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { Burger } from '../../../Model/Burger/burger';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule,MatSelectModule,MatFormFieldModule,MatIconModule],
  templateUrl: './card.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './card.component.css'
})
export class CardComponent  {
  @Input() obj!:Burger;
  image=computed<string>(()=>{return this.obj.image});
  name =computed<string>(()=>{return this.obj.name});
  price=computed<number>(()=>{return this.obj.price});
  calories=computed<number>(()=>{return this.obj.calories});
}
