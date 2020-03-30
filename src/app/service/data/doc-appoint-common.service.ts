import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class DocAppointCommonService {

  constructor( private http : HttpClient) { }

  retrieveStates(){
    return this.http.get<string[]>(`${API_URL}/api/public/states`)
  }

  retrieveCity(state){
    return this.http.get<string[]>(`${API_URL}/api/public/city/${state}`)
  }

}
