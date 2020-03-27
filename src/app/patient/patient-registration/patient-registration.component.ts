import { Component, OnInit } from '@angular/core';

export class PatientRegDetails {
  constructor(
    public patient_id : string,
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

patientDetails : PatientRegDetails

@Component({
  selector: 'app-user-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerPatient(){

  }
}
