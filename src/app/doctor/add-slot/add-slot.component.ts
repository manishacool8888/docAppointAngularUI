import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorServiceService } from 'src/app/service/doctor/doctor-service.service';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';

export class SlotDetails {
  constructor(public start_time : string,
              public end_time :string,
              public meridiem_indicator : string
              ){ }
}

export class AddSlotResponse {
  constructor(public message : string){ }
}

@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.css']
})
export class AddSlotComponent implements OnInit {

  slotDetails : SlotDetails;
  username = sessionStorage.getItem(AUTHENTICATED_USER);

  num : number=0;

  @Output() public outputFromAddSlot: EventEmitter<any> = new EventEmitter<any>();

  constructor(private doctorService : DoctorServiceService) { }

  ngOnInit() {
    this.slotDetails = new SlotDetails('','','');
  }

  addSlot(){
    this.doctorService.addSlot(this.slotDetails).subscribe(
      response => {
        console.log('success response from web service for add slot');
        console.log(response.message);
        this.outputFromAddSlot.emit('Y');
      },
      error => {
        console.log(error);
      }
    )
  }
}
