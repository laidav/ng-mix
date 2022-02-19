import { Injectable, OnInit, SimpleChanges } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Observable } from 'rxjs';
import { Person } from '../app/models/Person';
import { BaseClassInjector } from 'ng-mix';

//Example with Service using the injector

export const PersonsMixin = (superClass = BaseClassInjector) => {
  @Injectable()
  class Persons extends superClass implements OnInit {
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
      console.log(changes, 'ngOnChange in Persons Mixin');
    }

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit();

      //Implementation here
      this.persons$ = this.personSrvc.getData();
    }		

    ngDoCheck(): void {
      super.ngDoCheck();
      //Implementation here
      console.log('ngDoCheck in Persons Mixin');
    }

    ngAfterContentInit(): void {
      super.ngAfterContentInit();
      //Implementation here
      console.log('ngAfterContentInit in Persons Mixin');
    }

    ngAfterContentChecked(): void {
      super.ngAfterContentChecked();
      //Implementation here
      console.log('ngAfterContentChecked in Persons Mixin');
    }

    ngAfterViewInit(): void {
      super.ngAfterViewInit();
      //Implementation here
      console.log('ngDoCheck in Persons Mixin');
    }

    ngAfterViewChecked(): void {
      super.ngAfterContentChecked();
      //Implementation here
      console.log('ngAfterViewChecked in Persons Mixin');
    }

    ngOnDestroy(): void {
      super.ngOnDestroy();
      //Implementation here
      console.log('ngOnDestroy in Persons Mixin');
    }
  }

  return Persons;
}