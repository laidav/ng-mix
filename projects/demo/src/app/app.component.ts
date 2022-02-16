import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private pers: PersonService) {}

  onEvent($event: any) {
    console.log('event fired');
  }
}
