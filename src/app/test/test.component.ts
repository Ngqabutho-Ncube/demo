import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
 
province: string[] = ['Gauteng','Northwest','Easterncape']

age: number[] = [50, 30, 60];


}
