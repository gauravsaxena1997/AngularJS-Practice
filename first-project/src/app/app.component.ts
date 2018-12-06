import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
	user:User;
	textInput:string = "Initial Value";
  service:string = "";

	constructor(private svc: TestService) {
 
   this.service = this.svc.printToConsole('Got the service !!');


	this.user = new User();
      this.user.name= 'Gaurav Saxena',
      this.user.desigination= 'Front-End Developer',
      this.user.address= '144-A, Baker Street, New York',
      this.user.contact= [
        '+91-9549992949',
        '+91-7976761580' ];

	}


}
