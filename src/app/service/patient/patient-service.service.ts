import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { PatientAppointBookings } from 'src/app/patient/manage-patient-bookings/manage-patient-bookings.component';
import { PatientRegistrationResponse } from 'src/app/patient/patient-registration/patient-registration.component';
import { ProfileDetails, ProfileUpdateResponse } from 'src/app/patient/manage-patient-profile/manage-patient-profile.component';
import { ServiceResponse } from 'src/app/doc-appoint-home/doc-appoint-home.component';
import { DoctorSearchDetails } from 'src/app/patient/search-doctor/search-doctor.component';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor( 
    private http : HttpClient
    ) { }

  registerPatient(patientDetails){
    return this.http.post<PatientRegistrationResponse>(`${API_URL}/api/public/register_patient`,patientDetails)
  }

  getPatientProfile(username){
    return this.http.get<ProfileDetails>(`${API_URL}/api/patient/patientProfile/${username}`)
  }

  updatePatientProfile(profileDetails){
    return this.http.post<ProfileUpdateResponse>(`${API_URL}/api/patient/updateProfile`,profileDetails)
  }

  retrieveAllBookings(username){
    return this.http.get<PatientAppointBookings[]>(`${API_URL}/api/patient/bookings/${username}`)
  }

  cancelBooking(username,booking_id){
    return this.http.delete(`${API_URL}/api/patient/${username}/cancelBooking/${booking_id}`);
  }

  disableAccount(username){
    return this.http.get<ServiceResponse>(`${API_URL}/api/patient/${username}/disableAccount`);
  }
 
  retrieveAllDoctors(state,city,locality,speciality){
    return this.http.get<DoctorSearchDetails[]>(`${API_URL}/api/patient/Doctors/state/${state}/city/${city}/locality/${locality}/speciality/${speciality}/search`);
  }

}
