import { Injectable, OnInit, SimpleChanges } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Observable } from 'rxjs';
import { Person } from '../app/models/Person';
import { BaseInjectorConstructor } from 'ng-mix';

//Example with Service using the injector

export const PersonsMixin = <Tbase extends BaseInjectorConstructor>(superClass: Tbase) => {
  @Injectable()
  abstract class Persons extends superClass implements OnInit {
    persons$: Observable<Person[]> = new Observable;

    personSrvc = this.injector.get(PersonService);

    alertPersons() {
      this.persons$.subscribe((persons: Person[]) => { 
        const names = persons
          .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
          .join(', ');

        alert(names);
      });
    }

    ngOnChanges(changes: SimpleChanges): void {
      super.ngOnChanges(changes);
      //Implementation here
      console.log(changes.label.currentValue, 'ngOnChanges in Persons Mixin');
    }

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit();

      //Implementation here
      this.persons$ = this.personSrvc.getData();
      console.log('ngOnInit in Persons Mixin');
    }		
  }

  return Persons;
}