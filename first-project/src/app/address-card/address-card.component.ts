import { Component,Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
// 
  // user: any;
  //pass string as a parameter
  // @Input('user') userobj: User;
  
  //get an object fromapp-root component
  @Input('user') user: User;


  constructor() {
  }

  ngOnInit() {
    // this.user = {
    //   name: this.user.name,
    //   desigination: this.user.desigination,
    //   address: this.user.address,
    //   contact: this.user.contact,
    // };

  }

}
