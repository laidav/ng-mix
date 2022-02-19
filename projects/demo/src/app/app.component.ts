import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly labelOne = 'See who is in Moes Bar';
  private readonly labelTwo = 'Who is in Moes Bar?';

  label = this.labelOne;

  changeLabel(): void {
    this.label = this.label === this.labelOne ? this.labelTwo : this.labelOne;
  }

  onEvent($event: any) {
    console.log('event fired');
  }
}
