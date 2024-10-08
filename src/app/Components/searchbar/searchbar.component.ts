import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatIconModule],
  templateUrl: './searchbar.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

}
