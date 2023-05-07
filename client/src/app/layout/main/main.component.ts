import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      .min-hieght-84 {
        min-height: 84vh;
      }
    `,
  ],
})
export class MainComponent {
  user: any;
  constructor() {}
}
