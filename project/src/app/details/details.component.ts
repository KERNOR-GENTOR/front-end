import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { events } from '../events';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  event;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
     this.route.paramMap.subscribe((params) => {
    this.event = events[+params.get('eventId')];
  });
  }

  onSubmit(customerData) {
    // Process checkout data here
  }

}