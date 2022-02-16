import { Injectable, OnInit } from '@angular/core';
import { BaseClassInjector } from 'projects/ng-mix/src/lib/models/BaseClassInjector';

export const DogMixin = (superClass = BaseClassInjector) => {

  @Injectable()
  class Dog extends superClass implements OnInit {
	
  // You can inject services from the BaseClassInjector i.e
  // myService = this.injector.get(MyService);

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit.call(this);

      //Implementation here
    }		
  }

  return Dog;
}