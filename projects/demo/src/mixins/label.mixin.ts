import {
  Injectable,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { BaseClassInjector } from 'ng-mix';

//Example with Inputs & Outputs

export const LabelMixin = (superClass = BaseClassInjector) => {

  @Injectable()
  class Label extends superClass implements OnInit {
    @Input() label = '';
    @Output() labelEvent = new EventEmitter<any>();

    rightAway = ' Right away!'

    ngOnChanges(changes: SimpleChanges): void {
      super.ngOnChanges(changes);
      console.log(changes.label.currentValue, 'ngOnChanges in Label mixin');
    }

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit();

      //Implementation here
      console.log(this.label, 'ngOnInit in Label mixin');
    }		

    ngDoCheck(): void {
      super.ngDoCheck();
      //Implementation here
      console.log('ngDoCheck in Label Mixin');
    }

    ngAfterContentInit(): void {
      super.ngAfterContentInit();
      //Implementation here
      console.log('ngAfterContentInit in Label Mixin');
    }

    ngAfterContentChecked(): void {
      super.ngAfterContentChecked();
      //Implementation here
      console.log('ngAfterContentChecked in Label Mixin');
    }

    ngAfterViewInit(): void {
      super.ngAfterViewInit();
      //Implementation here
      console.log('ngDoCheck in Label Mixin');
    }

    ngAfterViewChecked(): void {
      super.ngAfterContentChecked();
      //Implementation here
      console.log('ngAfterViewChecked in Label Mixin');
    }

    ngOnDestroy(): void {
      super.ngOnDestroy();
      //Implementation here
      console.log('ngOnDestroy in Label Mixin');
    }
  }

  return Label;
}