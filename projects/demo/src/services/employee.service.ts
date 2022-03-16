import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Employee } from '../app/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of([
      {
        firstName: 'Homer',
        lastName: 'Simpson',
        jobTitle: 'Safety Inspector'
      },
      {
        firstName: 'Charles',
        lastName: 'Burns',
        jobTitle: 'Power plant boss'
      },
      {
        firstName: 'Waylon',
        lastName: 'Smithers',
        jobTitle: 'Assistant'
      },
      {
        firstName: 'Ned',
        lastName: 'Flanders',
        jobTitle: 'Neighbour'
      },
      {
        firstName: 'Maude',
        lastName: 'Flanders',
        jobTitle: 'Assistant'
      },
      {
        firstName: 'Todd',
        lastName: 'Flanders',
        jobTitle: 'Assistant'
      },
      {
        firstName: 'Rod',
        lastName: 'Flanders',
        jobTitle: 'Assistant'
      },
    ]);
  }
}
