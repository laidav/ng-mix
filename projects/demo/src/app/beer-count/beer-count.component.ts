import { Component, Injector } from '@angular/core';
import { CounterMixin } from '../../mixins/counter.mixin';
import { LabelMixin } from '../../mixins/label.mixin';
import { composeMixins } from 'ng-mix';

const mixins = composeMixins(LabelMixin, CounterMixin)()

@Component({
  selector: 'app-beer-count',
  templateUrl: './beer-count.component.html',
  styleUrls: ['./beer-count.component.scss'],
  inputs: ['label']
})
export class BeerCountComponent extends mixins {
  constructor(injector: Injector) {
    super(injector);
  }
}
