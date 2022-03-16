import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Option } from '../models/Option';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {
  @Input() options: Option<any>[] = [];
  @Input() selectedOptions: Option<any>[] = [];

  @Output() optionSelected = new EventEmitter<Option<any>>();

  searchControl = new FormControl();
  filteredOptions$: Observable<Option<any>[]> | null = null;

  constructor() { }

  onOptionSelect(option: Option<any>) {
    this.searchControl.setValue('');
    this.optionSelected.emit(option);
  };

  private _filter(value: string): Option<any>[] {
    return this.options.filter(option => !this.selectedOptions.includes(option) && option.label.includes(value));
  }

  ngOnInit() {
    this.filteredOptions$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
}
