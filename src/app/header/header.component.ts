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
 
    changeBack() {
      let backSwap = document.getElementById('listB');
      if (backSwap) {
        backSwap.style.backgroundColor = 'green';
      }
    }
   
    changeBack2() {
      let backSwap = document.getElementById('listB');
      if (backSwap) {
        backSwap.style.backgroundColor = 'red';
      }
    }
   
    changeBack3() {
      let backSwap = document.getElementById('listB');
      if (backSwap) {
        backSwap.style.backgroundColor = 'blue';
      }
    }
    changeBack4() {
      let backSwap = document.getElementById('listB');
      if (backSwap) {
        backSwap.style.backgroundColor = '#6b6565';
      }
    }
  }


