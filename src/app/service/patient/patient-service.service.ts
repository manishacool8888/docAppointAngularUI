import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { PatientAppointBookings } from 'src/app/patient/manage-patient-bookings/manage-patient-bookings.component';
import { PatientRegistrationResponse } from 'src/app/patient/patient-registration/patient-registration.component';
import { ProfileDetails, ProfileUpdateResponse } from 'src/app/patient/manage-patient-profile/manage-patient-profile.component';

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

  getPatientProfile(username){
    return this.http.get<ProfileDetails>(`${API_URL}/api/patient/getBookings${username}`)
  }

  updatePatientProfile(profileDetails){
    return this.http.post<ProfileUpdateResponse>(`${API_URL}/api/patient/updateProfile`,profileDetails)
  }

  retrieveAllBookings(username){
    return this.http.get<PatientAppointBookings[]>(`${API_URL}/api/patient/getBookings${username}`)
  }

  deleteBookings(username,booking_id){
    return this.http.delete(`${API_URL}/api/patient/${username}/deleteBooking/${booking_id}`)
  }

  disableAccount(username){
    return this.http.get<string>(`${API_URL}/api/patient/${username}/disableAccount`)
  }

}
