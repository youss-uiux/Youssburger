import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CardComponent }  from '../card/card.component';
import {CardSecondComponent} from '../card-second/card-second.component';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent,CardSecondComponent,AgGridAngular],
  templateUrl: './body.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
}
