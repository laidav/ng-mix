import { Component, OnInit, Output, Injector, EventEmitter } from '@angular/core';
import { Option } from '../models/Option';
import { map } from 'rxjs/operators';
import { TypeaheadMixin } from './typeahead.mixin';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  inputs: ['options', 'selectedOptions'],
})
export class TypeaheadComponent extends TypeaheadMixin() implements OnInit {

  @Output() optionSelected = new EventEmitter<Option<any>>();

  constructor(public inj: Injector) { super(inj); }

  onOptionSelect(option: Option<any>) {
    this.searchControl.setValue('');
    this.optionSelected.emit(option);
  };

  ngOnInit() {
    super.ngOnInit();

    this.filteredOptions$ = this.filteredOptions$?.pipe(
      map((options) => options?.filter((option) => !this.selectedOptions?.includes(option)))) || null;
  }
}
