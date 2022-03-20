import { Injectable, OnInit } from '@angular/core';
import { BaseInjectorConstructor} from 'ng-mix';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

export const CounterMixin =  <Tbase extends BaseInjectorConstructor>(superClass: Tbase) => {

  @Injectable()
  class Counter extends superClass implements OnInit {
    subscriptions = new Subscription();
    count = 0;
    count2 = 2;
	
    // You can inject services from the BaseClassInjector i.e
    // myService = this.injector.get(MyService);
    ngDoCheck(): void {
      super.ngDoCheck();
      console.log('ngDoCheck in counter mixin', this.count);
      console.log('ngDoCheck in counter mixin', this.count2);
    }

    ngAfterContentInit(): void {
      super.ngAfterContentInit();
      console.log('ngAfterContentInit in counter mixin', this.count);
      console.log('ngAfterContentInit in counter mixin', this.count2);
    }

    ngAfterContentChecked(): void {
      super.ngAfterContentChecked();
      console.log('ngAfterContentChecked in counter mixin', this.count);
      console.log('ngAfterContentChecked in counter mixin', this.count2);
    }

    ngAfterViewInit(): void {
      super.ngAfterViewInit();
      console.log('ngAfterViewInit in counter mixin', this.count);
      console.log('ngAfterViewInit in counter mixin', this.count2);
    }

    ngAfterViewChecked(): void {
      super.ngAfterViewChecked();
      console.log('ngAfterViewChecked in counter mixin', this.count);
      console.log('ngAfterViewChecked in counter mixin', this.count2);
    }

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit();

      console.log('ngOnInit in counter mixin', this.count);
      console.log('ngOnInit in counter mixin', this.count2);

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
      console.log('subscriptionsUnsubscribed=', this.subscriptions.closed);
      this.subscriptions.unsubscribe();
      console.log('subscriptionsUnsubscribed=', this.subscriptions.closed);
    }
  }

  return Counter;
}