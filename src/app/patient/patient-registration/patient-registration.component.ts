import { Component, OnInit } from '@angular/core';
import { DocAppointCommonService } from 'src/app/service/data/doc-appoint-common.service';
import { PatientServiceService } from 'src/app/service/patient/patient-service.service';

export class PatientRegDetails {
  constructor(
    public patient_id : string,
    public password : string,
    public first_name :string,
    public last_name : string,
    public date_of_birth : Date,
    public gender: string,
    public address_line_one : string,
    public address_line_two : string,
    public state : string,
    public city : string,
    public pincode : string,
    public primary_mobile_number : string,
    public alternate_mobile_number : string,
    public alternate_email_id : string
    ){
  }
}

export class PatientRegistrationResponse {
  constructor(public username : string,
              public user_role :string,
              public isRegistrationSuccess : boolean){ }
}

@Component({
  // selector: 'app-user-registration',
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  
  patientDetails : PatientRegDetails
  stateList : string[];
  cityList : string[];
  repassword : string='';
  isRegistrationDone = false;
  registrationResponse :PatientRegistrationResponse;

  constructor(private docAppointService:DocAppointCommonService,
              private patientService : PatientServiceService) { }

  ngOnInit() {
    this.patientDetails = new PatientRegDetails('','','','',new Date(),'','','','','','','','','');
    this.getStateList();
  }

  getStateList(){
    this.docAppointService.retrieveStates().subscribe(
      response => {
        this.stateList=response;
      }
    )
  }

  getcityList(state){
    this.docAppointService.retrieveCity(state).subscribe(
      response => {
        this.cityList=response;
        console.log("cityList is :"+this.cityList);
      }
    )
  }

  registerPatient(){
    console.log("registerPatient called");
    this.patientService.registerPatient(this.patientDetails).subscribe(
      response => {
        this.registrationResponse=response;
        this.isRegistrationDone = response.isRegistrationSuccess;
        console.log("Patient Registration is successful");
      }
    )
  }
}
