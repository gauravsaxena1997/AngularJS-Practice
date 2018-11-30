import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  dateMsg: string;

  constructor() {
    setInterval (()=>{
      let currentDate = new Date();
      this.dateMsg = currentDate.toDateString() + ' | ' + currentDate.toLocaleString();
    } , 1000);
   }

  ngOnInit() {
  }

}
