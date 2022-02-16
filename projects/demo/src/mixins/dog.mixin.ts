import { Injectable, OnInit } from '@angular/core';
import { BaseClassInjector } from 'projects/ng-mix/src/lib/models/BaseClassInjector';
import { PersonService } from '../services/person.service';


export const DogMixin = (superClass = BaseClassInjector) => {

  @Injectable()
  class Dog extends superClass implements OnInit {
    personSrvc = this.injector.get(PersonService);

    
	
  // You can inject services from the BaseClassInjector i.e
  // myService = this.injector.get(MyService);

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit.call(this);


      //Implementation here
      this.personSrvc.getData().subscribe((result) => console.log(result));
    }		
  }

  return Dog;
}