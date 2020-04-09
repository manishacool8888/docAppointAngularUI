import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { DocAppointHomeComponent } from './doc-appoint-home/doc-appoint-home.component';
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { DoctorRegistrationComponent } from './doctor/doctor-registration/doctor-registration.component';
import { BookAppointmentComponent } from './patient/book-appointment/book-appointment.component';

const routes: Routes = [
  
  { path : '',component:DocAppointHomeComponent},
  { path : 'docAppointHome',component:DocAppointHomeComponent},
  { path : 'login',component:LoginComponent},
  { path : 'logout',component:LogoutComponent},
  { path : 'register',component: RegisterComponent},
  { path : 'aboutUs',component:AboutUsComponent},
  { path : 'contactUs',component:ContactUsComponent},
  { path : 'doctorHome',component:DoctorHomeComponent},
  { path : 'doctorRegistration',component: DoctorRegistrationComponent},
  { path : 'patientHome',component:PatientHomeComponent},
  { path : 'patientRegistration',component:PatientRegistrationComponent},
  { path : 'bookAppointment/:doctor_id',component:BookAppointmentComponent},
  ////////////////////////////////////////
  { path : 'welcome/:name',component:WelcomeComponent},
  { path : 'todos',component:ListTodosComponent, canActivate : [RouteGuardService] },
  { path : 'todos/:id',component:TodoComponent,canActivate : [RouteGuardService]},
  ////////////////////////////////////////
  { path : '**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
