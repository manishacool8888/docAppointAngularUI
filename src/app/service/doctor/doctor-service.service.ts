import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { BookingSlots } from 'src/app/doctor/manage-doctor-booking-slot/manage-doctor-booking-slot.component';
import { DocAppointBookings } from 'src/app/doctor/manage-doctor-bookings/manage-doctor-bookings.component';
import { ProfileUpdateResponse, ProfileDetails } from 'src/app/doctor/manage-doctor-profile/manage-doctor-profile.component';
import { DoctorRegistrationResponse } from 'src/app/doctor/doctor-registration/doctor-registration.component';
import { AddSlotResponse } from 'src/app/doctor/add-slot/add-slot.component';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor( private http : HttpClient) { }

  registerDoctor(doctorDetails){
    return this.http.post<DoctorRegistrationResponse>(`${API_URL}/api/public/register_patient`,doctorDetails)
  }

  getDoctorProfile(username){
    return this.http.get<ProfileDetails>(`${API_URL}/api/doctor/patientProfile/${username}`)
  }

  updateDoctorProfile(profileDetails){
    return this.http.post<ProfileUpdateResponse>(`${API_URL}/api/doctor/updateProfile`,profileDetails)
  }

  retrieveAllBookings(username){
    return this.http.get<DocAppointBookings[]>(`${API_URL}/api/doctor/bookings${username}`)
  }

  deleteBooking(username,booking_id){
    return this.http.delete(`${API_URL}/api/doctor/${username}/deleteBooking/${booking_id}`)
  }

  retrieveAllSlots(username){
    return this.http.get<BookingSlots[]>(`${API_URL}/api/doctor/slots${username}`)
  }

  addSlot(SlotDetails){
    return this.http.post<AddSlotResponse>(`${API_URL}/api/doctor/addSlot`,SlotDetails)
  }

  deleteSlot(username,booking_id){
    return this.http.delete(`${API_URL}/api/doctor/${username}/deleteSlot/${booking_id}`)
  }

  disableAccount(username){
    return this.http.get<string>(`${API_URL}/api/doctor/${username}/disableAccount`)
  }

}
