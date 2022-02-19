import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../app/models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personOfTheMonth?: Person = undefined;

  constructor() { }

  getData(): Observable<Person[]> {
    return of([
      {
        firstName: 'Homer',
        lastName: 'Simpson'
      },
      {
        firstName: 'Moe',
        lastName: 'Szyslak'
      }
    ]);
  }
}
