import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName: string;
  constructor() {
  }

  ngOnInit() {
    this.user = {
      name: this.userName;
      field: 'Front-End Developer',
      address: '144-A, Baker Street, New York',
      contact: [
        '+91-9549992949',
        '+91-7976761580',
        '+0141-2632324'
        ]
    };

  }

}
