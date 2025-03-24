import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'git_intro';
  cars = ["Quantum", "Volvo", "BMW"];
  b1: Boolean = 7 < 10;
  b2: boolean = 5+5==10;


  constructor()  {
    console.log (this.cars)
    console.log (this.b1)
    console.log (this.b2)

   
  }
  
  

}

