import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorServiceService } from 'src/app/service/doctor/doctor-service.service';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';

export class NewSlotDetails {
  constructor(public doctor_id : string,
              public start_time : string,
              public end_time :string,
              public meridiem_indicator : string
              ){ }
}

@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.css']
})
export class AddSlotComponent implements OnInit {

  newSlotDetails : NewSlotDetails;
  messageFromWs = '';
  username = sessionStorage.getItem(AUTHENTICATED_USER);

  num : number=0;

  @Output() public outputFromAddSlot: EventEmitter<any> = new EventEmitter<any>();

  constructor(private doctorService : DoctorServiceService) { }

  ngOnInit() {
    this.newSlotDetails = new NewSlotDetails(this.username,'','','');
  }

  addSlot(){
    this.doctorService.addSlot(this.newSlotDetails).subscribe(
      response => {
        this.messageFromWs = response.message;
        console.log('messageFromWs:'+this.messageFromWs);

        if(this.messageFromWs==='success'){
          this.outputFromAddSlot.emit('Y');
        }else{
          this.outputFromAddSlot.emit('N');
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
