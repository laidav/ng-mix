import { Component, Input } from '@angular/core';
import { PersonsMixin } from '../../mixins/persons.mixin';
import { Injector } from '@angular/core';
import { PersonService } from '../../services/person.service';

const mixin: any = PersonsMixin();

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent extends mixin {
  @Input() label = '';

  constructor(inj: Injector) { super(inj); }

  personSrvc = this.injector.get(PersonService);

  onClick() {
    this.alertPersons();
  }

  ngOnInit(): void {
    super.ngOnInit.call(this);
  }
}
