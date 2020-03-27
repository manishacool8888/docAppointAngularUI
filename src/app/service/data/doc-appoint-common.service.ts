import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class States{
  constructor(public state : string){ }
}

export class city{
  constructor(public city : string){ }
}

@Injectable({
  providedIn: 'root'
})
export class DocAppointCommonService {

  constructor( private http : HttpClient) { }

  retrieveStates(){
    return this.http.get<States[]>(`${API_URL}/api/public/states}`)
  }

  retrieveCity(state){
    return this.http.get<city[]>(`${API_URL}/api/public/${state}`)
  }

}
