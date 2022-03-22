import { BaseInjectorConstructor } from 'ng-mix';
import { Injectable, OnInit, Input } from '@angular/core';
import { Option } from '../models/Option';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export const TypeaheadMixin = <Tbase extends BaseInjectorConstructor>(superClass: Tbase) => {

  @Injectable()
  abstract class Typeahead extends superClass implements OnInit {
    @Input() options: Option<any>[] = [];
    @Input() selectedOptions: Option<any>[] = [];

    searchControl = new FormControl();
    filteredOptions$: Observable<Option<any>[]> | null = null;

    private _filter(value: string): Option<any>[] {
      return this.options.filter(option => option.label.includes(value));
    }

    ngOnInit() {
      super.ngOnInit();

      this.filteredOptions$ = this.searchControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
    }
  }

  return Typeahead;
}