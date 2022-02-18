import { Injectable, OnInit } from '@angular/core';
import { BaseClassInjector } from 'ng-mix';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

export const CounterMixin = (superClass = BaseClassInjector) => {

  @Injectable()
  class Counter extends superClass implements OnInit {
    subscriptions = new Subscription();
    count = 0;
    count2 = 0;
	
    // You can inject services from the BaseClassInjector i.e
    // myService = this.injector.get(MyService);

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit();

      //Implementation here
      this.subscriptions.add(
        interval(1000).pipe(map((x) => x + 1)).subscribe((val) => {
          this.count = val;
          console.log(val);
      }));

      this.subscriptions.add(
        interval(1000).pipe(map((x) => (x + 1) * 2)).subscribe((val) => {
          this.count2 = val;
          console.log(val);
      }));
    }		

    ngOnDestroy(): void {
      super.ngOnDestroy();
      this.subscriptions.unsubscribe();
    }
  }

  return Counter;
}