import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { PatientAppointBookings } from 'src/app/patient/manage-patient-bookings/manage-patient-bookings.component';

export class PatientRegistrationResponse{
  constructor(public username : string,
              public user_role :string){ }
}

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor( 
    private http : HttpClient
    ) { }

  // retrieveAllTodos(username){
  //   return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`)
  // }

  // deleteTodo(username,id){
  //   return this.http.delete(`${API_URL}/users/${username}/todos/${id}`)
  // }

  // retrieveTodo(username,id){
  //   return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  // }

  // updateTodo(username,id,todo){
  //   return this.http.put(`${API_URL}/users/${username}/todos/${id}`,todo)
  // }

  //retrieveBookings
//deleteBookings

  registerPatient(patientDetails){
    return this.http.post<PatientRegistrationResponse>(`${API_URL}/api/public/register_patient`,patientDetails)
  }

  retrieveBookings(username){
    return this.http.get<PatientAppointBookings[]>(`${API_URL}/users/${username}/todos`)
  }

  deleteBookings(username,id){
    return this.http.delete(`${API_URL}/users/todos/${id}`)
  }
}
