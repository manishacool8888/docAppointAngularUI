import { Component, OnInit } from '@angular/core';
import { USER_FIRST_NAME } from 'src/app/app.constants';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

  showManageBookingsComp : boolean = true;
  showManageBookingSlotsComp : boolean = false;
  showManageProfileComponent : boolean = false;
  user_first_name = sessionStorage.getItem(USER_FIRST_NAME);

  constructor() { }

  ngOnInit() {

  }

  manageBookings(){
    this.showManageBookingsComp=true;
    this.showManageBookingSlotsComp=false;
    this.showManageProfileComponent=false;
  }

  manageBookingSlots(){
    this.showManageBookingsComp=false;
    this.showManageBookingSlotsComp=true;
    this.showManageProfileComponent=false;
  }

  manageProfile(){
    this.showManageBookingsComp=false;
    this.showManageBookingSlotsComp=false;
    this.showManageProfileComponent=true;
  }

}
