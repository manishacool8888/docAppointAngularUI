import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message : string){ }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http : HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean")
  }

  executeHelloWorldServiceWithPathVariable(name){
    // let basicAuthString=this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization : basicAuthString
    // })

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`,
    //{headers}
    )
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username='prnjn'
  //   let password='Dragon'
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(username + ':' + password)

  //   return basicAuthHeaderString;
  // }

}
