import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from 'src/app/service/patient/patient-service.service';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';
import { USER_FIRST_NAME } from 'src/app/app.constants';

export class PatientAppointBookings {
  constructor(public booking_id : number,
              public first_name : string, //first name of patient
              public speciality_name : string,
              public booking_date : Date,
              public start_time : string,
              public end_time : string,
              public meridiem_indicator : string,
              public symptom_desc : string,
              public cancelled : string,
              public cancelled_by : string){
  }
}

@Component({
  selector: 'app-manage-patient-bookings',
  templateUrl: './manage-patient-bookings.component.html',
  styleUrls: ['./manage-patient-bookings.component.css']
})

export class ManagePatientBookingsComponent implements OnInit {

  message : string
  appointBookingItems: PatientAppointBookings[]
  username = sessionStorage.getItem(AUTHENTICATED_USER)
  user_first_name = sessionStorage.getItem(USER_FIRST_NAME)
  
  constructor(private patientService :PatientServiceService) { }

  ngOnInit() {
    this.refreshBookings();
 }

 refreshBookings(){
   this.patientService.retrieveAllBookings(this.username).subscribe(
     response => {
       this.appointBookingItems = response
     },
     error => {
       console.log(error)
     }
   )
 }

 deleteBooking(id){
   console.log(`delete todo ${id}`)
   this.patientService.deleteBooking(this.username,id).subscribe(
     response => {
       console.log(response)
       this.message= `Delete of Todo ${id} Successful !`

       this.refreshBookings();
     },
     error => {
       console.log(error)
     }
   )
 }

}
