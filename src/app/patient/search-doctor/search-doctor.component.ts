import { Component, OnInit } from '@angular/core';
import { DocAppointCommonService } from 'src/app/service/data/doc-appoint-common.service';
import { PatientServiceService } from 'src/app/service/patient/patient-service.service';


export class DoctorDetails {
  constructor(private first_name : number,
              private gender : string,
              private  practicing_from : Date,
              private consultation_fee : number,
              private speciality_name : string,
              private state : string,
              private city  : string,
              private locality : string
              ){ }
}

// export class LocalityDetails {
//   constructor(private state : string,
//               private city  : string,
//               private locality : string
//               ){ }
// }

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {

  stateList : string[];
  cityList : string[];
  localityList : string[];

 // localityDetails : LocalityDetails;
  doctorDetailsList : DoctorDetails[];

  selectedState='';
  selectedCity='';
  selectedLocality='';

  constructor(private docAppointService : DocAppointCommonService,
              private patientService : PatientServiceService) { }

  ngOnInit() {
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

  seachDoctor(){
    //this.localityDetails = new LocalityDetails(this.selectedState,this.selectedCity,this.selectedLocality);
    
    this.patientService.retrieveAllDoctors(this.selectedState,this.selectedCity,this.selectedLocality).subscribe(
      response => {
        this.doctorDetailsList=response;
        console.log(response);
      },
      error => {
        console.log(error)
      }
    )
  }
 
}
