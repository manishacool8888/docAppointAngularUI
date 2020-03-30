import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  showPatientRegisterComp : boolean = true;
  showDoctorRegisterComp : boolean = false;

  constructor() { }

  ngOnInit() {

  }

  showPatientRegisterForm(){
    this.showPatientRegisterComp  = true;
    this.showDoctorRegisterComp = false;
  }

  showDoctorRegisterForm(){
    this.showPatientRegisterComp  = false;
    this.showDoctorRegisterComp = true;
  }

}
