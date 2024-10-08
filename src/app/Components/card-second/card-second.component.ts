import { ChangeDetectionStrategy, Component, HostBinding, HostListener, input, output,Output, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-card-second',
  standalone: true,
  imports: [MatButtonModule,MatSelectModule,MatFormFieldModule,MatIconModule,CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './card-second.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './card-second.component.css',
})
export class CardSecondComponent {
  image=input('img/1.png');
  name =input('Name of burger')
}
