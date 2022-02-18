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

    ngOnChanges(changes: SimpleChanges): void {
      super.ngOnChanges(changes);
      console.log(changes, 'ngOnChanges in label mixin');
    }

    ngOnInit(): void {
      //Call super's lifecycle method
      super.ngOnInit();

      //Implementation here
      console.log(this.label, 'ngOnInit in label mixin');
    }		
  }

  return Label;
}