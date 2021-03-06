import { Component } from '@angular/core';
import { PersonsMixin } from '../../mixins/persons.mixin';
import { Injector } from '@angular/core';
import { LabelMixin } from '../../mixins/label.mixin';
import { Base } from 'ng-mix';

const mixins = LabelMixin(PersonsMixin(Base));

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
  inputs: ['label'],
  outputs: ['labelEvent']
})
export class SandboxComponent extends mixins {

  constructor(inj: Injector) { super(inj); }

  onClick() {
    this.personSrvc.personOfTheMonth = { firstName: 'new', lastName: 'guy' };
    this.labelEvent.emit();
    this.alertPersons();
  }
}
