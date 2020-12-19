

import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
  <ul class="ulClass">
    <li><a [routerLink]="['/welcome']">Home</a></li>
    <li><a [routerLink]="['/products']">Product List</a></li>
    </ul>
  <h1>{{pageTitle}}</h1>
  <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  pageTitle: string = "Acme Product Management "
} 