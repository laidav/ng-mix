import { Injectable, OnInit } from '@angular/core';
import { BaseClassInjector } from 'ng-mix';

export const TypeaheadMixin = (superClass = BaseClassInjector) => {

  @Injectable()
  class Typeahead extends superClass implements OnInit {
	
    // You can inject services from the BaseClassInjector i.e
    // myService = this.injector.get(MyService);

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit();

      //Implementation here
    }		
  }

  return Typeahead;
}