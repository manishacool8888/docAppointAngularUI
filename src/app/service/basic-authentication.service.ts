import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { API_URL, USER_ROLE, USER_FIRST_NAME } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
export const ENABLED_USER = 'enabled_user';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  executeAuthenticationService(username,password){

    let basicAuthHeaderString = 'Basic '+ window.btoa(username + ':' + password)

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/api/login/${username}`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,username)
          sessionStorage.setItem(TOKEN,basicAuthHeaderString)
          sessionStorage.setItem(ENABLED_USER,data.isEnabled)
          sessionStorage.setItem(USER_ROLE,data.user_role)
          sessionStorage.setItem(USER_FIRST_NAME,data.user_first_name)
          return data;
        }
      )
    );
    // pipe method allows us to declare what should be done if the request succeeds or the request fails
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN)
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user===null)
  }

  isUserPatient(){
    let patient = sessionStorage.getItem(USER_ROLE)

    return (patient==='ROLE_PATIENT');
  }

  isUserDoctor(){
    let doctor = sessionStorage.getItem(USER_ROLE)
    return (doctor==='ROLE_DOCTOR');
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(USER_ROLE);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean{
  constructor(public username:string,
              public user_role:string,
              public isEnabled:string,
              public user_first_name:string){}
}