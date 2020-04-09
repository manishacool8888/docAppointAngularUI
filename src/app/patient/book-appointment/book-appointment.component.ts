import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientServiceService } from 'src/app/service/patient/patient-service.service';
import { ProfileDetails } from 'src/app/doctor/manage-doctor-profile/manage-doctor-profile.component';
import { DoctorServiceService } from 'src/app/service/doctor/doctor-service.service';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';

export class BookingDetails {

  constructor(public patient_id : string,
              public doctor_id  : string,
              public slot_id : number,
              public booking_date : Date,
              public symptom_desc : string
              ){ }
}

export class SlotAvailability {
  constructor(public slot_id : number,
              public start_time : string,
              public end_time : string,
              public meridiem_indicator: string,
              public isAvailable : string // Y or N
              ){ }
}

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})

export class BookAppointmentComponent implements OnInit {

  doctor_id : string;
  doctorProfile : ProfileDetails;
  bookingDetails : BookingDetails;
  slotList : SlotAvailability[];
  bookingConfirmation : string;
  username = sessionStorage.getItem(AUTHENTICATED_USER);

  constructor(private router : Router,
              private route : ActivatedRoute,
              private patientService : PatientServiceService,
              private doctorService : DoctorServiceService) { }

  ngOnInit() {
    this.doctor_id = this.route.snapshot.params['doctor_id'];
    this.doctorProfile = new ProfileDetails(this.doctor_id,'','',new Date(),'',new Date(),'',0,'','','','','','','','','','',new Date());
    this.bookingDetails = new BookingDetails(this.username,this.doctor_id,0,new Date(),'');

    this.getDoctorProfileDetails();
  }

  getDoctorProfileDetails(){
    console.log("getProfileDetails called");
    this.doctorService.getDoctorProfile(this.doctor_id).subscribe(
      response => {
        this.doctorProfile=response;
        console.log("Doctor Profile Fetched.")
      },
      error => {
        console.log(error)
      }
    )
  }

  bookAppointment(){
    console.log("book appointment called");
    this.patientService.bookAppointment(this.bookingDetails).subscribe(
      response=>{

        this.bookingConfirmation = response.message;
        // this.router.navigate(['patientHome'])
      },
      error=>{
        console.log(error);
      }
    )
  }

  getSlots(date){
    console.log('date from event is :'+date);

    this.doctorService.retieveSlotAvailability(this.doctor_id,date).subscribe(
      response => {
        this.slotList = response;
        console.log('SlotList fetched')
      },
      error => {
        console.log(error);
      }
    )
  }

  setSlotIdinRequest(slot_id){
    this.bookingDetails.slot_id = slot_id;
    console.log('slot_id='+ slot_id);
  }

}
