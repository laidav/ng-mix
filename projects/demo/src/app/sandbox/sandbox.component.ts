import { Component } from '@angular/core';
import { DogMixin } from '../../mixins/dog.mixin';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent extends DogMixin() {

  ngOnInit(): void {
  }

}
