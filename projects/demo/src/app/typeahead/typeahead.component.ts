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
  @Output() optionSelected = new EventEmitter<Option<any>>();

  searchControl = new FormControl();

  filteredOptions$: Observable<Option<any>[]> | null = null;

  constructor() { }

  ngOnInit() {
    this.filteredOptions$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): Option<any>[] {
    return this.options.filter(option => option.label.includes(value));
  }
}
