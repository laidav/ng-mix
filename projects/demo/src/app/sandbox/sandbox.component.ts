import { Component } from '@angular/core';
import { PersonsMixin } from '../../mixins/persons.mixin';
import { Injector } from '@angular/core';
import { LabelMixin } from '../../mixins/label.mixin';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';
import { composeMixins } from 'ng-mix';

const mixins = composeMixins(LabelMixin, PersonsMixin)();

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
  inputs: ['label'],
  outputs: ['labelEvent']
})
export class SandboxComponent extends mixins {
  persons$!: Observable<Person[]>
  rightAway!: string;

  constructor(inj: Injector) { super(inj); }

  onClick() {
    this.labelEvent.emit();
    this.alertPersons();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
