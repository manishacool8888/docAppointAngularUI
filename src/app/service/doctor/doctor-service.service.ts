import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { SlotDetails } from 'src/app/doctor/manage-doctor-booking-slot/manage-doctor-booking-slot.component';
import { DocAppointBookings } from 'src/app/doctor/manage-doctor-bookings/manage-doctor-bookings.component';
import { ProfileUpdateResponse, ProfileDetails } from 'src/app/doctor/manage-doctor-profile/manage-doctor-profile.component';
import { DoctorRegistrationResponse } from 'src/app/doctor/doctor-registration/doctor-registration.component';
import { ServiceResponse } from 'src/app/doc-appoint-home/doc-appoint-home.component';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor( private http : HttpClient) { }

  registerDoctor(doctorDetails){
    return this.http.post<DoctorRegistrationResponse>(`${API_URL}/api/public/register_doctor`,doctorDetails)
  }

  getDoctorProfile(username){
    return this.http.get<ProfileDetails>(`${API_URL}/api/doctor/doctorProfile/${username}`)
  }

  updateDoctorProfile(profileDetails){
    return this.http.post<ProfileUpdateResponse>(`${API_URL}/api/doctor/updateProfile`,profileDetails)
  }

  retrieveAllBookings(username){
    return this.http.get<DocAppointBookings[]>(`${API_URL}/api/doctor/bookings/${username}`)
  }

  cancelBooking(username,booking_id){
    return this.http.delete<ServiceResponse>(`${API_URL}/api/doctor/${username}/cancelBooking/${booking_id}`)
  }

  retrieveAllSlots(username){
    return this.http.get<SlotDetails[]>(`${API_URL}/api/doctor/slots/${username}`)
  }

  addSlot(newSlotDetails){
    return this.http.post<ServiceResponse>(`${API_URL}/api/doctor/addSlot`,newSlotDetails)
  }

  deleteSlot(username,slot_id){
    return this.http.delete<ServiceResponse>(`${API_URL}/api/doctor/${username}/deleteSlot/${slot_id}`)
  }

  disableAccount(username){
    return this.http.get<ServiceResponse>(`${API_URL}/api/doctor/disableAccount/${username}`)
  }

}
