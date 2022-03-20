import {
  Injectable,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  Injector
} from '@angular/core';
import { BaseInjectorConstructor } from 'ng-mix';

//Example with Inputs & Outputs

export const LabelMixin = <Tbase extends BaseInjectorConstructor>(superClass: Tbase) => {

  @Injectable()
  class Label extends superClass implements OnInit {
    @Input() label = '';
    @Output() labelEvent = new EventEmitter<any>();

    suffix = ' with Label Mixin Suffix'

    ngOnChanges(changes: SimpleChanges): void {
      super.ngOnChanges(changes);
      console.log(changes.label.currentValue, 'ngOnChanges in Label mixin');
    }
  }

  return Label;
}