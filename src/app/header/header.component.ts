import { Component } from '@angular/core';
import { BarraComponent } from '../barra/barra.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BarraComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  

}
