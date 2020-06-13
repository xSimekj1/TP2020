import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  @Input() data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

  constructor() { }

  ngOnInit() {
  }


}
