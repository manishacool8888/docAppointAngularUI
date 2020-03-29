import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from 'src/app/service/patient/patient-service.service';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';
import { USER_FIRST_NAME } from 'src/app/app.constants';

export class PatientAppointBookings {
  constructor(public bookingId : number,
              public doctorName : string,
              public speciality : boolean,
              public bookingDate : Date,
              public startTime : string,
              public endTime:string){
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
   this.patientService.retrieveBookings(this.username).subscribe(
     response => {
       this.appointBookingItems = response
     }
   )
 }

 deleteBooking(id){
   console.log(`delete todo ${id}`)
   this.patientService.deleteBookings(this.username,id).subscribe(
     response => {
       console.log(response)
       this.message= `Delete of Todo ${id} Successful !`

       this.refreshBookings();
     } 
   )
 }

}
