import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { TestComponent } from "./test/test.component";

@Component({
  selector: 'app-root',
   imports: [CommonModule, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  
  //declared an inititalised array of type number 
  foodPrices: number[] = [50, 120, 75, 200, 30, 300, 150, 20, 90, 400];

  // initial sort in order of 
  sortFoodPrices: number[] = [...this.foodPrices];

  // boolean
  isSortedAsc: boolean = true;

  sortNumber() {
    if (this.isSortedAsc) {
      this.sortFoodPrices.sort((a, b) => a - b); // Ascending order
    } else {
      this.sortFoodPrices.sort((a, b) => b - a); // Descending order
    }
    this.isSortedAsc = !this.isSortedAsc; // Toggle the sorting order
  }
 
}
 





