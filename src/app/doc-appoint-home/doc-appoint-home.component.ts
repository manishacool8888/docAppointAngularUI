import { Component, OnInit } from '@angular/core';

export class ServiceResponse {
  constructor(public message : string){ }
}

@Component({
  selector: 'app-doc-appoint-home',
  templateUrl: './doc-appoint-home.component.html',
  styleUrls: ['./doc-appoint-home.component.css']
})
export class DocAppointHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
