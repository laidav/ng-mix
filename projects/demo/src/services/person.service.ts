import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../app/models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getData(): Observable<Person[]> {
    return of([
      {
        firstName: 'John Doe',
        lastName: 'Doe'
      },
      {
        firstName: 'John Doe',
        lastName: 'Doe'
      }
    ]);
  }
}
