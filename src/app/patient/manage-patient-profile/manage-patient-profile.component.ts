import { Component, OnInit } from '@angular/core';
import { DocAppointCommonService } from 'src/app/service/data/doc-appoint-common.service';
import { PatientServiceService } from 'src/app/service/patient/patient-service.service';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';

export class ProfileDetails {
  constructor(
    public patient_id : string,
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

export class ProfileUpdateResponse {
  constructor(public username : string,
              public profileUpdated :string
              ){ }
}

@Component({
  selector: 'app-manage-patient-profile',
  templateUrl: './manage-patient-profile.component.html',
  styleUrls: ['./manage-patient-profile.component.css']
})
export class ManagePatientProfileComponent implements OnInit {

  isUpdateSuccess = false;
  isEditActivated = false;
  stateList : string[];
  cityList : string[];

  profileDetails : ProfileDetails;
  profileUpdateResponse : ProfileUpdateResponse;
  username =  sessionStorage.getItem(AUTHENTICATED_USER);

  constructor(private docAppointService:DocAppointCommonService,
              private patientService : PatientServiceService) { }

  ngOnInit() {
    this.profileDetails = new ProfileDetails(this.username,'','',new Date(),'','','','','','','','','');
    this.getProfileDetails();
    
  }

  getProfileDetails(){
    console.log("getProfileDetails called");
    this.patientService.getPatientProfile(this.username).subscribe(
      response => {
        this.profileDetails=response;
        this.getStateList();
        this.getcityList(this.profileDetails.state);
      },
      error => {
        console.log(error)
      }
    )
  }

  getStateList(){
    this.docAppointService.retrieveStates().subscribe(
      response => {
        this.stateList=response;
      },
      error => {
        console.log(error)
      }
    )
  }

  getcityList(state){
    this.docAppointService.retrieveCity(state).subscribe(
      response => {
        this.cityList=response;
        console.log("cityList is :"+this.cityList);
      },
      error => {
        console.log(error)
      }
    )
  }

  updatePatientDetails(){
    console.log("update Patient profile called");
    this.patientService.updatePatientProfile(this.profileDetails).subscribe(
      response => {
        this.profileUpdateResponse=response;
        if('Y'===response.profileUpdated){
          this.isUpdateSuccess = true;
        }
        console.log("Patient Registration is successful");
      },
      error => {
        console.log(error)
      }
    )
  }

}
