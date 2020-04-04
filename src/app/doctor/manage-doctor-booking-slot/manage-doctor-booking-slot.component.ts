import { Component, OnInit } from '@angular/core';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';
import { DoctorServiceService } from 'src/app/service/doctor/doctor-service.service';

export class SlotDetails {
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
  bookingSlots: SlotDetails[]
  username = sessionStorage.getItem(AUTHENTICATED_USER)
  showAddSlotComp = false;
  slotAdded = false;
  messageFromWs='';

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

 deleteSlot(slot_id){
   console.log(`delete slot ${slot_id}`)
   this.doctorService.deleteSlot(this.username,slot_id).subscribe(
     response => {
       console.log(response)
       this.messageFromWs = response.message;
       this.message= `${slot_id} Deleted Successful successfully!`
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
