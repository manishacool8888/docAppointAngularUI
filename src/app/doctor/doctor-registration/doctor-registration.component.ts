import { Component, OnInit } from '@angular/core';
import { DocAppointCommonService } from 'src/app/service/data/doc-appoint-common.service';
import { DoctorServiceService } from 'src/app/service/doctor/doctor-service.service';

export class DoctorRegDetails {
  constructor(
    public doctor_id : string,
    public password : string,
    public first_name :string,
    public last_name : string,
    public date_of_birth : Date,
    public gender: string,
    public practicing_from : Date,
    public consultation_fee : number,
    public address_line_one : string,
    public address_line_two : string,
    public state : string,
    public city : string,
    public locality :string,
    public pincode : string,
    public primary_mobile_number : string,
    public alternate_mobile_number : string,
    public alternate_email_id : string,
    public institute_name : string,
    public procurement_date : Date
    ){
  }
}

export class DoctorRegistrationResponse {
  constructor(public username : string,
              public user_role :string,
              public isRegistrationSuccess : boolean){ }
}

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

  doctorDetails : DoctorRegDetails
  stateList : string[];
  cityList : string[];
  localityList : string[];
  repassword : string='';
  isRegistrationDone = false;
  registrationResponse :DoctorRegistrationResponse;

  constructor(private docAppointService:DocAppointCommonService,
              private doctorService : DoctorServiceService) { }

  ngOnInit() {
    this.doctorDetails = new DoctorRegDetails('','','','',new Date(),'',new Date(),0,'','','','','','','','','','',new Date());
    this.getStateList();
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

  getLocalityList(city){
    this.docAppointService.retrieveLocality(city).subscribe(
      response => {
        this.localityList=response;
        console.log("localityList is :"+this.cityList);
      },
      error => {
        console.log(error)
      }
    )
  }

  registerPatient(){
    console.log("registerPatient called");
    this.doctorService.registerDoctor(this.doctorDetails).subscribe(
      response => {
        this.registrationResponse=response;
        this.isRegistrationDone = response.isRegistrationSuccess;
        console.log("Patient Registration is successful");
      },
      error => {
        console.log(error)
      }
    )
  }

}
