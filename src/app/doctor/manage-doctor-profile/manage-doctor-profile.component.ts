import { Component, OnInit } from '@angular/core';
import { AUTHENTICATED_USER } from 'src/app/service/basic-authentication.service';
import { DocAppointCommonService } from 'src/app/service/data/doc-appoint-common.service';
import { DoctorServiceService } from 'src/app/service/doctor/doctor-service.service';
import { SpecialityList } from '../doctor-registration/doctor-registration.component';

export class ProfileDetails {
  constructor(
    public doctor_id : string,
    public first_name :string,
    public last_name : string,
    public date_of_birth : Date,
    public gender: string,
    public practicing_from : Date,
    public speciality_name : string,
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

export class ProfileUpdateResponse {
  constructor(public username : string,
              public profileUpdated :string
              ){ }
}

@Component({
  selector: 'app-manage-doctor-profile',
  templateUrl: './manage-doctor-profile.component.html',
  styleUrls: ['./manage-doctor-profile.component.css']
})
export class ManageDoctorProfileComponent implements OnInit {

  isUpdateSuccess = false;
  editActivated = false;
  stateList : string[];
  cityList : string[];
  localityList : string[];
  specialityList : SpecialityList[];

  doctorDetails : ProfileDetails;
  profileUpdateResponse : ProfileUpdateResponse;
  username =  sessionStorage.getItem(AUTHENTICATED_USER);
  
  constructor(private docAppointService:DocAppointCommonService,
              private doctorService : DoctorServiceService) { }

  ngOnInit() {
    this.doctorDetails = new ProfileDetails(this.username,'','',new Date(),'',new Date(),'',0,'','','','','','','','','','',new Date());
    this.getSpecialityList();
    this.getProfileDetails();
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

  getSpecialityList(){
    this.docAppointService.retrieveSpeciality().subscribe(
      response => {
        this.specialityList=response;
      },
      error => {
        console.log(error)
      }
    )
  }

  getProfileDetails(){
    console.log("getProfileDetails called");
    this.doctorService.getDoctorProfile(this.username).subscribe(
      response => {
        this.doctorDetails=response;
        this.getStateList();
        this.getcityList(this.doctorDetails.state);
        this.getLocalityList(this.doctorDetails.city);

      },
      error => {
        console.log(error)
      }
    )
  }

  updateDoctorProfile(){
    console.log("update Doctor profile called");
    this.doctorService.updateDoctorProfile(this.doctorDetails).subscribe(
      response => {
        this.profileUpdateResponse=response;
        if('Y'===response.profileUpdated){
          this.isUpdateSuccess = true;
        }
        console.log("Doctor profile update successful");
      },
      error => {
        console.log(error)
      }
    )
  }

  toggleEdit(){
    console.log("toggleEdit called")
    this.editActivated = !this.editActivated;
  }

}
