import { Injectable, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Observable } from 'rxjs';
import { Person } from '../app/models/Person';
import { BaseClassInjector } from 'ng-mix';

export const PersonsMixin = (superClass = BaseClassInjector) => {

  @Injectable()
  class Persons extends superClass implements OnInit {
    persons$: Observable<Person[]> = new Observable;

    personSrvc = this.injector.get(PersonService);

    alertPersons() {
      this.persons$.subscribe((persons: Person[]) => { 
        const names = persons.map(({ firstName, lastName }) => `${firstName} ${lastName}`).join(', ');
        alert(names);
      });
    }

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit();

      //Implementation here
      this.persons$ = this.personSrvc.getData();
    }		
  }

  return Persons;
}