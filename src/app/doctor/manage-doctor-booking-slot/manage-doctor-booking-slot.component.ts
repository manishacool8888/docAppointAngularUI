import { Component, OnInit } from '@angular/core';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';
import { DoctorServiceService } from 'src/app/service/doctor/doctor-service.service';

export class BookingSlots {
  constructor(public slot_id : number,
              public start_time : string,
              public end_time :string,
              public meridiem_indicator : string
              ){ }
}

@Component({
  selector: 'app-manage-doctor-booking-slot',
  templateUrl: './manage-doctor-booking-slot.component.html',
  styleUrls: ['./manage-doctor-booking-slot.component.css']
})

export class ManageDoctorBookingSlotComponent implements OnInit {

  message : string
  bookingSlots: BookingSlots[]
  username = sessionStorage.getItem(AUTHENTICATED_USER)
  showAddSlotComp = false;
  slotAdded = false;

  constructor(private doctorService : DoctorServiceService) { }

  ngOnInit() {
    this.refreshSlots();
 }

 refreshSlots(){
   this.doctorService.retrieveAllSlots(this.username).subscribe(
     response => {
       this.bookingSlots = response
     },
     error => {
       console.log(error)
     }
   )
 }

 triggerRefreshSlots(isSlotAdded : any):void{
   console.log('triggerRefreshSlots called, isSlotAdded='+isSlotAdded);
   if(isSlotAdded==='Y'){
     this.slotAdded = true;
     this.refreshSlots();
     this.AddSlotToggle();
   }
 }

 deleteSlot(id){
   console.log(`delete slot ${id}`)
   this.doctorService.deleteSlot(this.username,id).subscribe(
     response => {
       console.log(response)

       this.message= `Delete of Todo ${id} Successful !`
       this.refreshSlots();
     },
     error => {
       console.log(error)
     }
   )
 }

  AddSlotToggle(){
    this.showAddSlotComp = !this.showAddSlotComp;
  }

}
