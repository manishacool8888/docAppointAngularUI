import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''
  usernameFromService : string
  errorMessageFromService : string

  userRoleFromService=sessionStorage.getItem('user_role');

  //ActivatedRoute
  constructor(private route : ActivatedRoute,
              private service : WelcomeDataService) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
     this.service.executeHelloWorldBeanService().subscribe(
       response => this.handleSuccfulResponse(response),
       error => this.handleErrorResponse(error)
       );
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccfulResponse(response),
      error => this.handleErrorResponse(error)
      );
 }

  handleSuccfulResponse(response){
    this.usernameFromService=response.username
    this.userRoleFromService=response.user_role
  }

  handleErrorResponse(error){
    //console.log(error)
    //console.log(error.error)
    console.log(error.error.error)
    console.log(error.error.status)
    console.log(error.error.message)

    this.errorMessageFromService = error.error.message
  }
}
