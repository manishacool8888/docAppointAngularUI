import { Component, OnInit } from '@angular/core';
import { USER_FIRST_NAME } from 'src/app/app.constants';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  showSearchDocComponent : boolean = true;
  showManageBookingComponent : boolean = false;
  showManageProfileComponent : boolean = false;
  user_first_name = sessionStorage.getItem(USER_FIRST_NAME);

  constructor() { }

  ngOnInit() {
  }

  searchDoctor(){
    this.showSearchDocComponent=true;
    this.showManageBookingComponent=false;
    this.showManageProfileComponent=false;
  }

  manageBooking(){
    this.showSearchDocComponent=false;
    this.showManageBookingComponent=true;
    this.showManageProfileComponent=false;
  }

  manageProfile(){
    this.showSearchDocComponent=false;
    this.showManageBookingComponent=false;
    this.showManageProfileComponent=true;
  }

}
