import { Component, OnInit } from '@angular/core';

export class DoctorRegDetails {
  constructor(
    public doctor_id : string,
    public password : string,
    public first_name :string,
    public last_name : string,
    public date_of_birth : Date,
    public gender: string,
    public address_line_one : string,
    public address_line_two : string,
    public state : string,
    public city : string,
    public pincode : string,
    public primary_mobile_number : string,
    public alternate_mobile_number : string,
    public alternate_email_id : string
    ){
  }
}

export class DoctorRegistrationResponse {
  constructor(public username : string,
              public user_role :string,
              public isRegistrationSuccess : boolean){ }
}

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("DoctorRegistrationComponent init")
  }

}
