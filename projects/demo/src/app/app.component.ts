import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly labelOne = 'Hiding Drinkers';
  private readonly labelTwo = 'Showing Drinkers';

  label = this.labelOne;

  changeLabel(): void {
    this.label = this.label === this.labelOne ? this.labelTwo : this.labelOne;
  }

  onEvent($event: any) {
    console.log('event fired');
  }
}
