import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

	service:string = "";
  constructor(private svc: TestService) {
  	this.service = this.svc.printToConsole('Service inside another module. !!')

   }

  ngOnInit() {
  }

}
