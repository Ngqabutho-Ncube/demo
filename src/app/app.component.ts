import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
   imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'git_intro';
  cars = ["Quantum", "Volvo", "BMW"];


  foodPrices: number[] = [50, 120, 75, 200, 30, 300, 150, 20, 90, 400];
  foodCategories: { price: number; category: string }[] = [];

  ngOnInit() {
    this.categorizeFoodPrices();
  }

  categorizeFoodPrices(){
    this.foodCategories = this.foodPrices.map(price => ({
      price,
      category: price >= 100 ? 'Expensive' : 'Affordable', // Categorize food as Expensive or Affordable
    }));
  }
}
 





