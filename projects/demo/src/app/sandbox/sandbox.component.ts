import { Component } from '@angular/core';
import { PersonsMixin } from '../../mixins/persons.mixin';
import { Injector } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent extends PersonsMixin() {

  constructor(inj: Injector) { super(inj); }

  personSrvc = this.injector.get(PersonService);

  alertPersons() {
    this.persons$.subscribe((persons) => { 
      const names = persons.map(({ firstName, lastName }) => `${firstName} ${lastName}`).join(', ');
      alert(names);
    });
  }

  ngOnInit(): void {
    super.ngOnInit.call(this);
  }
}
