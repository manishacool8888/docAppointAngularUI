import { Component, OnInit } from '@angular/core';
import { DoctorServiceService } from 'src/app/service/doctor/doctor-service.service';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';
import { USER_FIRST_NAME } from 'src/app/app.constants';

export class DocAppointBookings {
  constructor(public booking_id : number,
              public first_name : string, // first name of doctor
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
  selector: 'app-manage-doctor-bookings',
  templateUrl: './manage-doctor-bookings.component.html',
  styleUrls: ['./manage-doctor-bookings.component.css']
})
export class ManageDoctorBookingsComponent implements OnInit {
  
  appointBookingItems: DocAppointBookings[]
  username = sessionStorage.getItem(AUTHENTICATED_USER)
  user_first_name = sessionStorage.getItem(USER_FIRST_NAME)
  messageFromWs = '';

  constructor(private doctorService : DoctorServiceService) { }

  ngOnInit() {
    this.refreshBookings();
  }

  refreshBookings(){
    this.doctorService.retrieveAllBookings(this.username).subscribe(
      response => {
        this.appointBookingItems = response
      },
      error => {
        console.log(error)
      }
    )
  }
 
  cancelBooking(booking_id){
    console.log(`cancel booking ${booking_id}`)
    this.doctorService.cancelBooking(this.username,booking_id).subscribe(
      response => {
        console.log(response);
        this.messageFromWs = response.message;
        this.refreshBookings();
      },
      error => {
        console.log(error)
      }
    )
  }

}
