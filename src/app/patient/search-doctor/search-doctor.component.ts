import { Component, OnInit } from '@angular/core';
import { DocAppointCommonService } from 'src/app/service/data/doc-appoint-common.service';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {

  stateList : string[];
  cityList : string[];
  localityList : string[];

  selectedState='';
  selectedCity='';
  selectedLocality='';

  constructor(private docAppointService : DocAppointCommonService) { }

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
    
  }

}
