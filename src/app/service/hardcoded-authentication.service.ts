import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(userName,password) {
    if(userName=='prnjn' && password=='Dragon'){
      sessionStorage.setItem('authenticatedUser',userName)
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
