import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Team 19 - Rezervacny system';
  data = null;

  constructor() {
    this.data = require('../assets/data/data.json');
    console.log(this.data);
  }
}
