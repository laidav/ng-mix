import { Component } from '@angular/core';
import { DogMixin } from '../mixins/dog.mixin';
import { Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends DogMixin() {
  constructor(private inj: Injector) {
    super(inj)
  }
}
