import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  ngAfterViewInit() {
    let w: any = window;
    let jq: any = w.$;
    jq('.carousel').carousel();
  }

  facts = [
  ];

  slides = [
    { path: './assets/slides/1.png', text: 'Slide 1' },
    { path: './assets/slides/2.png', text: 'Slide 2' },
  ];
  quotes = [
  ];
}





