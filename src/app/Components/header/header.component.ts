import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SearchbarComponent} from '../searchbar/searchbar.component';
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SearchbarComponent,
    MatBadgeModule
  ],
  templateUrl: './header.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
