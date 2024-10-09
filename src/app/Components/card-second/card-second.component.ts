import { ChangeDetectionStrategy, Component, computed, HostBinding, HostListener, Inject, InjectionToken, Input, input, output,Output, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { EventEmitter } from 'stream';
import { Burger } from '../../../Model/Burger/burger';
@Component({
  selector: 'app-card-second',
  standalone: true,
  imports: [MatButtonModule,MatSelectModule,MatFormFieldModule,MatIconModule,CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './card-second.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './card-second.component.css',
})
export class CardSecondComponent {
  @Input() obj!:Burger;
  image=computed<string>(()=>{return this.obj.image});
  name =computed<string>(()=>{return this.obj.name});
  price=computed<number>(()=>{return this.obj.price});
  calories=computed<number>(()=>{return this.obj.calories});
  
  
}
