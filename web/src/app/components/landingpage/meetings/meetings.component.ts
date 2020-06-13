import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  @Input() meetings = null;

  constructor() { }

  ngOnInit() {
  }

}
