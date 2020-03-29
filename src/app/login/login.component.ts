import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'user name'
  password='password'
  errorMessage='Invalid credential'
  invalidLogin=false

  //Angular.giveMeRouter

  constructor(private router : Router,
              private hardcodedAuthenticationService : HardcodedAuthenticationService,
              private basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
     if(this.userName=='prnjn' && this.password=='Dragon'){
   // if(this.hardcodedAuthenticationService.authenticate(this.userName,this.password)){

      this.router.navigate(['welcome',this.userName])
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true
    }
  }

  handleBasicAuthLogin(){
    if(this.userName=='prnjn' && this.password=='Dragon'){
      this.router.navigate(['patientHome'])
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true
    }
    // this.basicAuthenticationService.executeAuthenticationService(this.userName,this.password)
    //     .subscribe(
    //       data => {
    //         console.log(data)
    //         this.router.navigate(['welcome',this.userName])
    //         this.invalidLogin=false;
    //       },
    //       error => {
    //         console.log(error)
    //         this.invalidLogin=true
    //       }
    //     )
  }
}
