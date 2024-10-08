import { ChangeDetectionStrategy, Component,OnInit  } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule,MatSelectModule,MatFormFieldModule,MatIconModule],
  templateUrl: './card.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  public name: string | undefined;
  constructor(){}
  ngOnInit(): void {
    this.name='Africa one shot ohh oui';
  }
}
