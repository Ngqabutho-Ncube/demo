import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  names: string[] = ["Aureliou", "Ngqabutho", "Conny", "Cobus"];
  surnames: string[] = ["Mthembu", "Ncube", "Moseri", "Van heerden"];

  sortedNames = this.names.sort();

  learnerBio = [
    {
      name: 'Conny',
      surname: 'Moseri',
      age: 30,
      networth: 'R30',
      location: 'Polokwane'
    },

    {
      name: 'Ngqabutho',
      surname: 'Ncube',
      age: 18,
      networth: 'R3000',
      location: 'Johannesburg'
    },

    {
      name: 'Aureliou',
      surname: 'Mthembu',
      age: 22,
      networth: 'R20',
      location: 'Johannesburg'
    },
    {
      name: 'Jabulani',
      surname: 'Makhanya',
      age: 22,
      networth: 'R25',
      location: 'Bloemfontein'
    }
  ];

  sortByName() {
    this.learnerBio.sort((a, b) => a.name.localeCompare(b.name));
  }





}

