import { Component } from '@angular/core';
// import {NavBarComponent} from './components/navbar/navbar.component';
// import {FooterComponent} from './components/footer/footer.component';

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
