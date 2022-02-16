import { Component } from '@angular/core';
import { PersonsMixin } from '../../mixins/persons.mixin';
import { Injector } from '@angular/core';
import { LabelMixin } from '../../mixins/label.mixin';

const mixin: any = LabelMixin(PersonsMixin());

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
  inputs: ['label'],
  outputs: ['labelEvent']
})
export class SandboxComponent extends mixin {

  constructor(inj: Injector) { super(inj); }

  onClick() {
    this.labelEvent.emit();
    this.alertPersons();
  }

  ngOnInit(): void {
    super.ngOnInit.call(this);
  }
}
