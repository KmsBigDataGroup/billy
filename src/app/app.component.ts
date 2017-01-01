import { Component } from '@angular/core';
import { AuthModel } from '@services/models/';

@Component({
  selector: 'app',
  template: `
    <app-nav></app-nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
    <simple-notifications [options]="notificationOptions"></simple-notifications>
  `,
  styleUrls: ['./app.component.css'],
})
export default class AppComponent {
  notificationOptions = {
    position: ['top', 'right'],
    timeOut: 5 * 1000,
    showProgressBar: false,
    lastOnBottom: false,
  };

  constructor(private authModel: AuthModel) {}
}
