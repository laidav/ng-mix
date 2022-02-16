import { Component } from '@angular/core';
import { DogMixin } from '../../mixins/dog.mixin';
import { Injector } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent extends DogMixin() {

  constructor(inj: Injector) {
    super(inj);
  }

  personSrvc = this.injector.get(PersonService);

  ngOnInit(): void {
      super.ngOnInit.call(this);

      this.personSrvc.getData().subscribe((persons) => console.log(persons, 'in component'));
  }
}
