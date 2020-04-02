import { Component, OnInit } from '@angular/core';

export class ProfileDetails {
  constructor(
    public doctor_id : string,
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

export class ProfileUpdateResponse {
  constructor(public username : string,
              public profileUpdated :string
              ){ }
}

@Component({
  selector: 'app-manage-doctor-profile',
  templateUrl: './manage-doctor-profile.component.html',
  styleUrls: ['./manage-doctor-profile.component.css']
})
export class ManageDoctorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
