import { Component,Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
  @Input('user') user: User;
  isCollapsed:boolean = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }


  constructor() {
  }

  ngOnInit() {

  }

}
