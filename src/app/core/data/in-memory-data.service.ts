import { PeriodicElement } from './../models/PeriodicElement';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const elements = [
      { id: 11, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { id: 12, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { id: 13, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { id: 14, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { id: 15, position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { id: 16, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { id: 17, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { id: 18, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { id: 19, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { id: 20, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    return {elements};
  }

  genId(elements: PeriodicElement[]): number {
    return elements.length > 0 ? Math.max(...elements.map(element => element.id)) + 1 : 11;
  }
}
