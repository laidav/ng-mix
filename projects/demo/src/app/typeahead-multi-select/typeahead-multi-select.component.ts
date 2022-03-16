import { Component, Injector, Output, EventEmitter } from '@angular/core';
import { TypeaheadMixin } from '../typeahead/typeahead.mixin';
import { Option } from '../models/Option';

@Component({
  selector: 'app-typeahead-multi-select',
  templateUrl: './typeahead-multi-select.component.html',
  styleUrls: ['./typeahead-multi-select.component.scss'],
  inputs: ['options', 'selectedOptions']
})
export class TypeaheadMultiSelectComponent extends TypeaheadMixin() {
  @Output() optionToggled = new EventEmitter<Option<any>>();

  constructor(public inj: Injector) { super(inj); }
}
