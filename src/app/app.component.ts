import { Component } from '@angular/core';
import {NavBarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
 <router-outlet></router-outlet>
 <footer></footer>
`,

})

export class AppComponent {
  private projectName: string;

  constructor() {
    this.projectName = 'Puget Sound Regional Travel Study';
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
